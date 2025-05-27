import api from "../api/axios";
import { fetchTasks, addTask, deleteTask } from "../services/taskService"; // Import the functions to test

// Mock the axios module
jest.mock("../api/axios");
const mockedApi = api as jest.Mocked<typeof api>;

describe("TaskService", () => {
  // Clear mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchTasks should fetch all tasks", async () => {
    const tasksMock = [
      { id: 1, title: "Test Task 1", created_at: "2024-09-27" },
      { id: 2, title: "Test Task 2", created_at: "2024-09-27" },
    ];
    mockedApi.get.mockResolvedValueOnce({ data: tasksMock });

    const tasks = await fetchTasks();
    expect(tasks).toEqual(tasksMock);
    expect(mockedApi.get).toHaveBeenCalledWith("/tasks/");
    expect(mockedApi.get).toHaveBeenCalledTimes(1);
  });

  test("addTask should add a new task", async () => {
    const newTask = { id: 3, title: "New Task", created_at: "2024-09-28" };
    mockedApi.post.mockResolvedValueOnce({ data: newTask });

    const task = await addTask("New Task");
    expect(task).toEqual(newTask);
    expect(mockedApi.post).toHaveBeenCalledWith("/tasks/", {
      title: "New Task",
    });
    expect(mockedApi.post).toHaveBeenCalledTimes(1);
  });

  test("deleteTask should delete a task", async () => {
    mockedApi.delete.mockResolvedValueOnce({}); // Mock the API delete call

    await deleteTask(1);
    expect(mockedApi.delete).toHaveBeenCalledWith("/tasks/1/");
    expect(mockedApi.delete).toHaveBeenCalledTimes(1);
  });

  test("fetchTasks should throw an error if the API fails", async () => {
    // Temporarily suppress console.error
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockedApi.get.mockRejectedValueOnce(new Error("API error"));
    await expect(fetchTasks()).rejects.toThrow("API error");
    expect(mockedApi.get).toHaveBeenCalledWith("/tasks/");

    // Restore console.error after the test
    consoleErrorMock.mockRestore();
  });

  test("addTask should throw an error if the API fails", async () => {
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockedApi.post.mockRejectedValueOnce(new Error("API error"));
    await expect(addTask("New Task")).rejects.toThrow("API error");
    expect(mockedApi.post).toHaveBeenCalledWith("/tasks/", {
      title: "New Task",
    });

    consoleErrorMock.mockRestore();
  });

  test("deleteTask should throw an error if the API fails", async () => {
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockedApi.delete.mockRejectedValueOnce(new Error("API error"));
    await expect(deleteTask(1)).rejects.toThrow("API error");
    expect(mockedApi.delete).toHaveBeenCalledWith("/tasks/1/");

    consoleErrorMock.mockRestore();
  });
});
