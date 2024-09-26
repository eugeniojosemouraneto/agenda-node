// db, prisma
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface createdUserRequest {
	username: string;
	email: string;
	password: string;
}

export class ModelUser {
	async createdUser({ username, email, password }: createdUserRequest) {
		try {
			return await prisma.user.create({
				data: {
					username: username,
					email: email,
					password: password,
				},
			});
		} catch (error) {
			throw new Error("User with this email or username already exists");
		}
	}

	async chagingUser({ username, email, password }: createdUserRequest) {
		try {
			return await prisma.user.update({
				where: { username: username },
				data: { username: username, email: email, password: password}
			})
		} catch(error) {
			throw new Error("Unable to update user data")
		}
	}

	async getByUserEmail(email: string) {
		return await prisma.user.findUnique({ where: { email: email } });
	}

	async getByUserUsername(username: string) {
		return await prisma.user.findUnique({ where: { username: username } });
	}

	async isUser_username(username: string) {
		const isExits = await prisma.user.findUnique({
			where: { username: username },
		});
		if (isExits) return true;
		return false;
	}

	async isUser_email(email: string) {
		const isExist = await this.getByUserEmail(email);
		if (isExist) return true;
		return false;
	}
}
