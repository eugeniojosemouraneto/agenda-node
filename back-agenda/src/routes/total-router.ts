import fastify from "fastify";

// users
import {
	changingUser,
	createdUser,
	deleteUser,
	loginUser,
} from "../routes/user.js";

import { createdTask } from "../routes/tasks.js";

const app = fastify().withTypeProvider();

// user
app.register(createdUser);
app.register(loginUser);
app.register(changingUser);
app.register(deleteUser);

// task
app.register(createdTask);


export default app;