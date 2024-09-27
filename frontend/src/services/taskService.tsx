import api from "../api/axios";
import { TaskTitleTypes } from "../types/TaskTypes";

// Fetch all tasks
export const fetchTasks = async (): Promise<TaskTitleTypes[]> => {
  try {
    const response = await api.get("/tasks/");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// Add a new task
export const addTask = async (title: string): Promise<TaskTitleTypes> => {
  try {
    const response = await api.post("/tasks/", { title });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (taskId: number): Promise<void> => {
  try {
    await api.delete(`/tasks/${taskId}/`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
