import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// models
import { ModelUser } from "../model/user.js";

// helpers
import { createUserToken } from "../helpers/createUserToken.js";
import { getToken } from "../helpers/getToken.js";
import { deleteUser } from "../routes/user.js";

const modelUser = new ModelUser();

interface MeuPayload {
	username: string;
}

interface createdUserRequest {
	username: string;
	email: string;
	password: string;
}

interface changingUserRequest {
	username?: string;
	email?: string;
	password?: string;
}

interface loginUserRequest {
	email: string;
	password: string;
}

interface authenticatedUser {
	id: string;
	username: string;
	email: string;
	password: string;
	created_at: Date;
	isDelete: boolean;
}

export class ControllerUser {
	async createdUser(
		request: FastifyRequest<{ Body: createdUserRequest }>,
		response: FastifyReply,
	) {
		const createTransactionBodySchema = z.object({
			username: z
				.string()
				.min(6, "Username must be at learst 6 characters")
				.max(45, "Username can't execeed 45 characters"),
			email: z.string().email("Invalid email format"),
			password: z
				.string()
				.min(6, "Password must be at learst 6 characters")
				.max(15, "Password can't execeed 15 characters"),
		});
		const user: createdUserRequest = createTransactionBodySchema.parse(
			request.body,
		);
		if (await modelUser.isUser_username(user.username))
			return response
				.status(401)
				.send("Username already registered in the database");

		if (await modelUser.isUser_email(user.email))
			return response
				.status(401)
				.send("Email already registered in the database");

		try {
			user.password = await bcrypt.hash(
				user.password,
				await bcrypt.genSalt(12),
			);
			const newUser = response
				.status(201)
				.send(await modelUser.createdUser(user));
			await createUserToken(user, request, response);
		} catch (error) {
			return response.status(500).send(error);
		}
	}

	async loginUser(
		request: FastifyRequest<{ Body: loginUserRequest }>,
		response: FastifyReply,
	) {
		const createTransactionBodySchema = z.object({
			email: z.string().email("Invalid email format."),
			password: z
				.string()
				.min(6, "Password must be at learst 6 characters.")
				.max(15, "Password can't execeed 15 characters."),
		});
		const user: loginUserRequest = createTransactionBodySchema.parse(
			request.body,
		);
		console.log("Datas colletion: ", user);
		if (!(await modelUser.isUser_email(user.email)))
			return response
				.status(401)
				.send(
					"Email already registered in the database there is no user with the email provided in the database.",
				);
		const userRequest: authenticatedUser | null =
			await modelUser.getByUserEmail(user.email);
		if (!userRequest)
			return response.status(401).send({
				message: "There is no user with the provided wmail in the database.",
			});
		const isPasswordUser = await bcrypt.compare(
			user.password,
			userRequest.password,
		);
		if (!isPasswordUser)
			return response
				.status(401)
				.send("The password provided does not match the registered one.");

		await createUserToken(userRequest, request, response);
	}

	static async checkToken(
		request: FastifyRequest | FastifyRequest<{ Body: createdUserRequest }>,
		response: FastifyReply,
	) {
		let currentUser: authenticatedUser | null = null;
		if (request.headers.authorization) {
			const decoded = jwt.verify(
				getToken(request.headers.authorization),
				"pi3.14159265359@",
			) as MeuPayload;
			currentUser = await modelUser.getByUserUsername(decoded.username);
			if (!currentUser) return response.status(401).send("User not found")
			if (currentUser.isDelete) return response.status(401).send("Deactivated user")
			currentUser.password = "";
		}
		return currentUser;
	}

	async changingUser(
		request: FastifyRequest<{ Body: createdUserRequest }>,
		response: FastifyReply,
	) {
		const createTransactionBodySchema = z.object({
			username: z
				.string()
				.min(6, "Username must be at learst 6 characters")
				.max(45, "Username can't execeed 45 characters")
				.optional(),
			email: z.string().email("Invalid email format").optional(),
			password: z
				.string()
				.min(6, "Password must be at learst 6 characters")
				.max(15, "Password can't execeed 15 characters")
				.optional(),
		});
		const user: changingUserRequest = createTransactionBodySchema.parse(
			request.body,
		);
		if (!request.headers.authorization)
			return response.status(401).send("Invalid token");

		const currentUser = await ControllerUser.checkToken(request, response);
		if (!currentUser) return response.status(401).send("User not found");

		if (user.username && user.username !== currentUser.username)
			currentUser.username = user.username;

		if (user.email && user.email !== currentUser.email)
			currentUser.email = user.email;

		if (user.password && user.password !== currentUser.password)
			currentUser.password = await bcrypt.hash(
				user.password,
				await bcrypt.genSalt(12),
			);

		const newUser = await modelUser.chagingUser(currentUser);
		return response.status(201).send({
			message: "User data updated successfully",
			user: newUser,
		});
	}

	async deleteUser(request: FastifyRequest, response: FastifyReply) {
		if (!request.headers.authorization)
			return response.status(401).send("Token is missing");

		const token = getToken(request.headers.authorization);
		let currentUser: authenticatedUser | null = null;
		try {
			const decoded = jwt.verify(token, "pi3.14159265359@") as MeuPayload;
			currentUser = await modelUser.getByUserUsername(decoded.username);
			if (!currentUser) return response.status(401).send("User not found");

			await modelUser.deleteUser(currentUser.id);
			return response.status(200).send("User deleted sucessfully");
		} catch (error) {
			return response.status(401).send("Invalid token");
		}
	}
}
