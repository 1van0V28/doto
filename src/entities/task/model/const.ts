import type { CheckboxGroupProps } from "antd/es/checkbox"
import {
    TaskCategory,  
    TaskStatus, 
    TaskPriority, 
    type DraftTask 
} from "./types"


export const SELECT_CATEGORY_OPTIONS = [
    {label: TaskCategory.BUG, value: TaskCategory.BUG},
    {label: TaskCategory.FEATURE, value: TaskCategory.FEATURE},
    {label: TaskCategory.DOCUMENTATION, value: TaskCategory.DOCUMENTATION},
    {label: TaskCategory.REFACTOR, value: TaskCategory.REFACTOR},
    {label: TaskCategory.TEST, value: TaskCategory.TEST}
]

export const RADIO_STATUS_OPTIONS: CheckboxGroupProps<string>["options"] = [
    {label: TaskStatus.TODO, value: TaskStatus.TODO},
    {label: TaskStatus.IN_PROGRESS, value: TaskStatus.IN_PROGRESS},
    {label: TaskStatus.DONE, value: TaskStatus.DONE}
]

export const RADIO_PRIORITY_OPTIONS: CheckboxGroupProps<string>["options"] = [
    {label: TaskPriority.LOW, value: TaskPriority.LOW},
    {label: TaskPriority.MEDIUM, value: TaskPriority.MEDIUM},
    {label: TaskPriority.HIGH, value: TaskPriority.HIGH}
]


export const INITIAL_DRAFT_TASK: DraftTask = {
    id: "",
    category: undefined,
    status: undefined,
    priority: undefined,
    title: "",
}