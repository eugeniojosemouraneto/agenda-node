// controller
import type { FastifyInstance } from "fastify";

// controller
import { ControllerUser } from "../controller/user.js";

const controllerUser = new ControllerUser();

export async function createdUser(app: FastifyInstance) {
	app.post("/user", controllerUser.createdUser);
}

export async function loginUser(app: FastifyInstance) {
	app.post("/login", controllerUser.loginUser);
}

export async function changingUser(app: FastifyInstance) {
	app.patch("/user/changing", {
		preHandler: ControllerUser.checkToken,
		handler: controllerUser.changingUser,
	});
}

export async function deleteUser(app: FastifyInstance) {
	app.delete("/user/delete", {
		preHandler: ControllerUser.checkToken,
		handler: controllerUser.deleteUser,
	});
}
