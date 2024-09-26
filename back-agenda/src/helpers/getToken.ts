import fastify, { type FastifyRequest } from "fastify";

export function getToken(reqHeadAuth: string) {
	return reqHeadAuth.split(" ")[1];
}
