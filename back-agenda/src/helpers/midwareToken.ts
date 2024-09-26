import fastify, { type FastifyRequest, type FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { getToken } from "./getToken.js";
import { string } from "zod";

interface JwtPayload {
	username: string;
}

export function midwareToken(
	request: FastifyRequest<{ Body: JwtPayload }>,
	response: FastifyReply,
	next: (err?: Error) => void,
) {
	let token: string;
	if (request.headers.authorization !== undefined) {
		token = getToken(request.headers.authorization);
		if (token) {
			next();
		}
	}
	return response.status(401).send("Token invalid");
}
