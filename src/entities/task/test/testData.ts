import { 
    TaskCategory, 
    TaskPriority, 
    TaskStatus,
    type Task 
} from "../model/types"


export const testTasks: Record<Task["id"], Task> = {
    "0": {
        id: "0",
        category: TaskCategory.DOCUMENTATION,
        status: TaskStatus.IN_PROGRESS,
        priority: TaskPriority.HIGH,
        title: "Very long title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget.",
    }
}