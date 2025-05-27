import React, { useEffect, useState } from "react";
import { CommentsTypes } from "../types/TaskTypes";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { TaskContext } from "../contexts/taskContexts";
import {
  fetchComments,
  addComment,
  deleteComment,
  updateComment,
} from "../services/commentService";
import CommentItem from "../components/CommentItem";
const CommentListPage = () => {
  const { taskId = "" } = useParams<{ taskId: string }>(); // get taskId from url params else set it to empty string
  const [comments, setComments] = useState<CommentsTypes[]>([]); // set comments to empty array
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const { contextTasks } = React.useContext(TaskContext); // get contextTasks from TaskContext for task title
  const [taskTitle, setTaskTitle] = useState<String>(null!);
  const [token, setToken] = useState<string | null>(null);

  // };
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setToken(token);
    const task = contextTasks.find((task) => task.id === parseInt(taskId));
    console.log(task);
    if (task) {
      setTaskTitle(task.title);
      console.log(task.title);
    } else {
      console.log("No task found");
    }

    const fetchInitialComments = async () => {
      try {
        const fetchedComments = await fetchComments(taskId, token);
        setComments(fetchedComments);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching comments", error);
        setLoading(false);
      }
    };
    fetchInitialComments();
  }, []);

  // Add a new comment
  const handleAddComment = async () => {
    try {
      const addedComment = await addComment(taskId, newComment);
      setComments([...comments, addedComment]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };
  // Delete a comment
  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  };
  // Update comment status or text
  const handleUpdateComment = async (
    commentId: number,
    eTargetStatus: string,
    comment_text: string
  ) => {
    try {
      const updatedComment = await updateComment(
        commentId,
        eTargetStatus,
        comment_text,
        taskId
      );
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, status: eTargetStatus }
            : comment
        )
      );
    } catch (error) {
      console.error("Error updating comment", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="container p-4 mx-auto w-1/2  ">
        <h1 className="text-2xl  text-white font-bold mb-d">Comments of {taskTitle}</h1>
        <ul>
          {comments.map((comment: CommentsTypes) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onUpdate={handleUpdateComment}
              onDelete={handleDeleteComment}
            />
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          className="border p-2 rounded w-1/2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-red-500 text-white text-sm ml-4  h-8 p-2 rounded"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentListPage;
