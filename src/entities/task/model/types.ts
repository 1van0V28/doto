// type TaskCategory = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test"
export enum TaskCategory {
    BUG = "Bug",
    FEATURE = "Feature",
    DOCUMENTATION = "Documentation",
    REFACTOR = "Refactor",
    TEST = "Test"
}

// type TaskStatus = "ToDo" | "In Progress" | "Done"
export enum TaskStatus {
    TODO = "ToDo",
    IN_PROGRESS = "In Progress",
    DONE = "Done"
}

// type TaskPriority = "Low" | "Medium" | "High"
export enum TaskPriority {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High"
}

export interface Task {
    id: string,
    category: TaskCategory,
    status: TaskStatus,
    priority: TaskPriority,
    title: string,
    description?: string,
}

export interface DraftTask extends Omit<Task, "category" | "status" | "priority"> {
    category?: TaskCategory,
    status?: TaskStatus
    priority?: TaskPriority
}

export type TaskContextType = {
    tasks: Record<Task["id"], Task>,
    saveTask: (task: Task) => void,
    deleteTask: (taskId: Task["id"]) => void,
}

export enum TaskReducerActionType {
    SAVE_TASK = "SAVE_TASK",
    DELETE_TASK = "DELETE_TASK"
}

export type TaskReducerAction = 
    | {type: TaskReducerActionType.SAVE_TASK, payload: Task}
    | {type: TaskReducerActionType.DELETE_TASK, payload: Task["id"]}

export type DraftContextType = {
    draft: DraftTask,
    updateDraft: (task: DraftTask) => void
}