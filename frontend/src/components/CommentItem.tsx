import React from "react";
import { CommentsTypes } from "../types/TaskTypes";

interface CommentItemProps {
  comment: CommentsTypes;
  onUpdate: (commentId: number, status: string, commentText: string) => void;
  onDelete: (commentId: number) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onUpdate,
  onDelete,
}) => {
  return (
    <li className="border-b py-4">
      <div className="flex justify-between items-center">
        <p className="text-xl flex-1 font-semibold">{comment.comment_text}</p>
        <select
          value={comment.status}
          className="border p-2 rounded text-sm text-red-500"
          onChange={(e) =>
            onUpdate(comment.id, e.target.value, comment.comment_text)
          }
        >
          <option value="pending">Pending</option>
          <option value="done">Done</option>
          <option value="undone">Undone</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button
          className="bg-red-500 text-white text-sm ml-4 h-8 p-2 rounded"
          onClick={() => onDelete(comment.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
