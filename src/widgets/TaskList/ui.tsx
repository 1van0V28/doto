import { useTaskStore } from "../../entities/task/model/store"
import { Space } from "antd"
import { TaskItem } from "../TaskItem/ui"


export function TaskList() {
    const { tasks } = useTaskStore()

    const taskList = Object.values(tasks).map((task) => {
        return (
            <TaskItem key={task.id} task={task}/>
        )
    })

    return (
        <Space wrap>
            {taskList}
        </Space>
    )
}