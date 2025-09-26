export type TaskStatus = "To Do" | "Done";
export type TaskPriority = "High" | "Medium" | "Low" | "Urgent";

interface TaskAssignee {
  id: string;
  avatarUrl: string;
}

export interface Task {
  id: string;
  title: string;
  project: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignees: TaskAssignee[];
  comments: number;
  dueDate: string;
}
