import { createContext, useContext, useReducer, type ReactNode } from "react"
import { type TaskContextType, type Task, type TaskReducerAction, TaskReducerActionType } from "./types"
import { testTasks } from "../test/testData"


const TaskContext = createContext<TaskContextType | undefined>(undefined)


export function useTaskStore(): TaskContextType {
    const taskContext = useContext(TaskContext)

    if (!taskContext) {
        throw new Error("useTaskStore is undefined. useTaskStore must be used inside <TaskProvider>")
    }

    return taskContext
}


function taskReducer(state: Record<Task["id"], Task>, action: TaskReducerAction) {
    switch (action.type) {
        case TaskReducerActionType.SAVE_TASK: {
            const task = action.payload

            return {...state, [task.id]: task}
        }
        case TaskReducerActionType.DELETE_TASK: {
            const newState = {...state}
            const id = action.payload
            delete newState[id]

            return newState
        }
        default: {
            return state
        }
    }
}

export function TaskProvider({children}: {children: ReactNode}) {
    const [tasks, dispatch] = useReducer(taskReducer, testTasks)

    const saveTask = (task: Task) => {dispatch({type: TaskReducerActionType.SAVE_TASK, payload: task})}
    const deleteTask = (taskId: Task["id"]) => {dispatch({type: TaskReducerActionType.DELETE_TASK, payload: taskId})}

    return (
        <TaskContext.Provider value={{tasks, saveTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}