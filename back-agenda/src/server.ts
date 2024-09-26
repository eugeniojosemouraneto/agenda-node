import fastify from "fastify";
import z from "zod";
// routes
import { changingUser, createdUser, loginUser } from "./routes/user.js";

const app = fastify().withTypeProvider();

app.register(createdUser);
app.register(loginUser);
app.register(changingUser)

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server runnig!");
	});
