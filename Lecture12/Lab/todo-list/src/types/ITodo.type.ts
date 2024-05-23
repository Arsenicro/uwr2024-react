export const todoStatuses = ["done", "in-progress", "to-do"] as const;
export const todoPriorities = ["low", "medium", "high"] as const;
export const todoTags = [
  "payment",
  "work",
  "university",
  "personal",
  "shopping",
  "home",
  "health",
  "finance",
  "travel",
  "exercise",
  "entertainment",
  "education",
  "career",
  "family",
  "friends",
  "maintenance",
  "bills",
  "hobbies",
  "cleaning",
  "cooking",
  "appointments",
  "meetings",
  "projects",
  "studying",
  "research",
  "development",
  "training",
  "events",
  "goals",
  "planning",
  "errands",
  "vacation",
  "administration",
  "pets",
  "volunteering",
  "sports",
  "reading",
  "writing",
  "meditation",
  "self-care",
  "art",
  "music",
  "language",
  "networking",
  "marketing",
  "sales",
  "strategy",
  "innovation",
  "technology",
  "science",
  "design",
  "photography",
  "videography",
  "gaming",
  "social media",
  "blogging",
  "vlogging",
  "investing",
  "real estate",
  "legal",
  "consulting",
  "mentoring",
  "coaching",
  "therapy",
  "construction",
  "gardening",
  "renovation",
  "repairs",
  "moving",
  "transportation",
  "recreation",
] as const;

export type ITodoStatus = (typeof todoStatuses)[number];
export type ITodoPriority = (typeof todoPriorities)[number];
export type ITags = (typeof todoTags)[number];

export interface IBaseTodoFields {
  name: string;
  status: ITodoStatus;
  priority: ITodoPriority;
  tags: ITags[];
}

export interface ITodo extends IBaseTodoFields {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
