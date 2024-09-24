import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { z } from "zod";
import bcrypt from "bcrypt";

// models
import { ModelUser } from "../model/user.js";

// helpers
import { createUserToken } from "../helpers/createUserToken.js";

const modelUser = new ModelUser();

interface createdUserRequest {
	username: string;
	email: string;
	password: string;
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
		console.log("Datas colleted", user);
		if (await modelUser.isUser_username(user.username))
			return response
				.status(401)
				.send("Username already registered in the database");
		if (await modelUser.isUser_email(user.email))
			return response
				.status(401)
				.send("Email already registered in the database");

		user.password = await bcrypt.hash(user.password, await bcrypt.genSalt(12));
		try {
			const newUser = response
				.status(201)
				.send(await modelUser.createdUser(user));
			await createUserToken(user, request, response);
		} catch (error) {
			return response.status(500).send(error);
		}
	}
}
