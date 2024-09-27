export interface TaskTitleTypes {
  id: number;
  title: string;
  created_at: string;
}

export interface CommentsTypes {
  id: number;
  comment_text: string;
  status: string;
  created_at: string;
}

export enum StatusTypes {
  done = "Done",
  pending = "Pending",
  cancelled = "Cancelled",
  undone = "Undone",
}
