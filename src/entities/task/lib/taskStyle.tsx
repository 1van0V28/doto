import { ClockCircleOutlined, SyncOutlined, CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { TaskCategory, TaskPriority, TaskStatus } from "../model/types"
import type { CategoryColor, PriorityColor, StatusStyle } from "./types"


export function getTaskStatusStyle(taskStatus: TaskStatus): StatusStyle {
    switch (taskStatus) {
        case TaskStatus.TODO: {
            return ({
                color: "default",
                icon: <ClockCircleOutlined/>
            }) 
        }
        case TaskStatus.IN_PROGRESS: {
            return ({
                color: "processing",
                icon: <SyncOutlined spin/>
            }) 
        }
        case TaskStatus.DONE: {
            return ({
                color: "success",
                icon: <CheckCircleOutlined/>
            }) 
        }
        default: {
            return ({
                color: "default",
                icon: <MinusCircleOutlined/>
            }) 
        }
    }
}


export const priorityColorMap: Record<TaskPriority, PriorityColor> = {
    [TaskPriority.LOW]: "cyan",
    [TaskPriority.MEDIUM]: "gold",
    [TaskPriority.HIGH]: "volcano",
};

export const categoryColorMap: Record<TaskCategory, CategoryColor> = {
    [TaskCategory.BUG]: "red",
    [TaskCategory.FEATURE]: "blue",
    [TaskCategory.DOCUMENTATION]: "purple",
    [TaskCategory.REFACTOR]: "cyan",
    [TaskCategory.TEST]: "green",
};