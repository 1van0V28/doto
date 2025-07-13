import { useTaskStore } from "../../entities/task/model/store"
import { useDraftStore } from "../../entities/task/model/draftStore"
import { useNavigate } from "react-router-dom"
import { Button } from "antd"
import { TaskItem } from "../TaskItem/ui"
import { INITIAL_DRAFT_TASK } from "../../entities/task/model/const"
import { PlusSquareFilled } from "@ant-design/icons"
import styles from "./ui.module.css"


export function TaskList() {
    const {tasks} = useTaskStore()
    const {updateDraft} = useDraftStore()
    const navigate = useNavigate()

    const handleAddTask = () => {
        const id = crypto.randomUUID()
        const newDraft = {...INITIAL_DRAFT_TASK, id: id}
        updateDraft(newDraft)
        navigate(`/task/${id}`)
    }

    const taskList = Object.values(tasks).map((task) => {
        return (
            <TaskItem key={task.id} task={task}/>
        )
    })

    return (
        <div className={styles.container}>
            <Button  className={styles.button} onClick={handleAddTask}>
                <PlusSquareFilled className={styles.button_icon}/>
            </Button>
            {taskList}
        </div>
    )
}