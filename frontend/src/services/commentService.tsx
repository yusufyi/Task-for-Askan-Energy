import api from "../api/axios";

export const fetchComments = async (taskId: string, token: string | null) => {
  try {
    console.log("fetchComments", taskId, token);
    const response = await api.get(`/comments/?task_id=${taskId}`, {
      headers: {
        Authorization: ` Token ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching comments", error);
    throw error;
  }
};
// Add a new comment to a task
export const addComment = async (taskId: string, newComment: string) => {
  try {
    const response = await api.post("/comments/create/", {
      task: taskId,
      comment_text: newComment,
      status: "pending",
    });
    return response.data;
  } catch (error) {
    console.error("Error adding comment", error);
    throw error;
  }
};

// Delete a comment
export const deleteComment = async (commentId: number) => {
  try {
    const response = await api.delete(`/comments/${commentId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment", error);
    throw error;
  }
};
// Update the status or text of a comment
export const updateComment = async (
  commentId: number,
  status: string,
  comment_text: string,
  taskId: string
) => {
  try {
    const response = await api.put(`/comments/${commentId}/`, {
      status,
      task: taskId,
      comment_text,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating comment", error);
    throw error;
  }
};
