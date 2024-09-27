import React from "react";
import TaskListPage from "./pages/TaskListPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CommentListPage from "./pages/CommentListPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="p-4">
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route
              path="/tasks/:taskId/comments/"
              element={
                <ProtectedRoute>
                  <CommentListPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
