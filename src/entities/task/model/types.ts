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

export type Task = {
    id: string,
    category: TaskCategory,
    status: TaskStatus,
    priority: TaskPriority,
    title: string,
    description?: string,
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