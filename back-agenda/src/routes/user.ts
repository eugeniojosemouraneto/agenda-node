// controller
import type { FastifyInstance } from "fastify";

// controller
import { ControllerUser } from "../controller/user.js";

const controllerUser = new ControllerUser();

export async function createdUser(app: FastifyInstance) {
	app.post("/user", controllerUser.createdUser);
}
