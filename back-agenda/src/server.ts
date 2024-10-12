import app from "./routes/total-router.js";

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server runnig!");
	});
