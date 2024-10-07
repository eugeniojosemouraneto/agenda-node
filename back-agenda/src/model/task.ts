// db, prisma
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface taskRequest {
	title: string;
	maximum_completion_date: string;
	description: string;
}

export class ModelTask {
	async createdTask(idUser: string, task: taskRequest) {}
}
