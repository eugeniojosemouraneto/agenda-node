// controller
import type { FastifyInstance } from "fastify";

// controller
import { ControllerTask } from "../controller/task.js";
import { ControllerUser } from "../controller/user.js";

const controllerTask = new ControllerTask();

export async function createdTask(app: FastifyInstance) {
	app.post("/task", {
		preHandler: ControllerUser.checkToken,
		handler: controllerTask.createdTask,
	});
}

// export async function loginUser(app: FastifyInstance) {
// 	app.post("/login", ControllerTask.loginUser);
// }

// export async function changingUser(app: FastifyInstance) {
// 	app.patch("/user/changing", {
// 		preHandler: ControllerTask.checkToken,
// 		handler: ControllerTask.changingUser,
// 	});
// }

// export async function deleteUser(app: FastifyInstance) {
// 	app.delete("/user/delete", {
// 		preHandler: ControllerTask.checkToken,
// 		handler: ControllerTask.deleteUser,
// 	});
// }
