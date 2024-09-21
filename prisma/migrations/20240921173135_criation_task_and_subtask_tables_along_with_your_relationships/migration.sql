-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "category_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "maximum_completion_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completion_status" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "id_category" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "task_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "task_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subject" TEXT NOT NULL,
    "description" TEXT,
    "completion_status" BOOLEAN NOT NULL DEFAULT false,
    "id_task" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "SubTask_id_task_fkey" FOREIGN KEY ("id_task") REFERENCES "task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubTask_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "task_title_key" ON "task"("title");

-- CreateIndex
CREATE UNIQUE INDEX "SubTask_subject_key" ON "SubTask"("subject");
