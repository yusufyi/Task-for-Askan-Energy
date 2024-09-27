import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TaskTitleTypes } from "../types/TaskTypes";
import { TaskContext } from "../contexts/taskContexts";
import { fetchTasks, addTask, deleteTask } from "../services/taskService"; // Import task service

const TaskListPage = () => {
  const [tasks, setTasks] = useState<TaskTitleTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const { setContextTasks } = React.useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks using task service
  const fetchAllTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
      setContextTasks(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Add task using task service
  const handleAddTask = async () => {
    try {
      const task = await addTask(newTask);
      setTasks([...tasks, task]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete task using task service
  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchAllTasks(); // Fetch tasks on component mount
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      <ul>
        {tasks.map((task: TaskTitleTypes) => (
          <li key={task.id} className="border-b py-4">
            <div className="flex items-center justify-between">
              <div>
                <Link to={`/tasks/${task.id}/comments/`}>
                  <p className="text-xl  font-semibold"> {task.title} </p>
                </Link>
              </div>
              <div>
                <button
                  className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <p className=" text-red-500  text-xs">
              {new Date(task.created_at).toLocaleDateString()}{" "}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center mt-4">
        <div className="w-full max-w-md">
          <div className="flex items-center">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
              className="flex-1 border border-gray-300 p-3 rounded-lg"
            />
            <button
              className="ml-3 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListPage;
