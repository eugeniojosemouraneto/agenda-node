import jwt from "jsonwebtoken";
import fastify, { type FastifyReply, type FastifyRequest } from "fastify";

interface createdUserRequest {
	username: string;
	email: string;
	password: string;
}

export function createUserToken(
	user: createdUserRequest,
	request: FastifyRequest,
	response: FastifyReply,
) {
	const token = jwt.sign(
		{
			username: user.username,
		},
		"pi3.1315925359@",
	);
	console.log(token);
	return response.status(200).send({
		message: "User with token",
		token: jwt.sign(
			{
				username: user.username,
			},
			"pi3.14159265359@",
		),
	});
}
