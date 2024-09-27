// create basic contextapi and provider
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { TaskTitleTypes } from "../types/TaskTypes";

interface TaskContextType {
  contextTasks: TaskTitleTypes[];
  setContextTasks: React.Dispatch<React.SetStateAction<TaskTitleTypes[]>>;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextType>({
  contextTasks: [],
  setContextTasks: () => [],
});

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [contextTasks, setContextTasks] = useState<TaskTitleTypes[]>(() => {
    // Retrieve tasks from localStorage on initialization
    const savedTasks = localStorage.getItem("contextTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("contextTasks", JSON.stringify(contextTasks));
  }, [contextTasks]);

  return (
    <TaskContext.Provider value={{ contextTasks, setContextTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
