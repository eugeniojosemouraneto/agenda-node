import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { z } from "zod";

// controller
import { ControllerUser } from "../controller/user.js";

// model
import { ModelTask } from "../model/task.js";

interface authenticatedUser {
	id: string;
	username: string;
	email: string;
	password: string;
	created_at: Date;
	isDelete: boolean;
}

interface createdTaskRequest {
	title: string;
	maximum_completion_date: string;
	description: string;
}

const modelTask = new ModelTask()

export class ControllerTask {
	async createdTask(
		request: FastifyRequest<{ Body: createdTaskRequest }>,
		response: FastifyReply,
	) {
		const createTransactionBodySchema = z.object({
			title: z.string(),
			maximum_completion_date: z.string(),
			description: z.string(),
		});
		const task: createdTaskRequest = createTransactionBodySchema.parse(
			request.body,
		);
		if (!request.headers.authorization)
			return response.status(401).send("User not found");

		const currentUser = await ControllerUser.checkToken(request, response);
		if (!currentUser) return response.status(401).send("User not found");
		const newTask = response
			.status(201)
			.send(await modelTask.createdTask(currentUser?.id, task));
	}
}
