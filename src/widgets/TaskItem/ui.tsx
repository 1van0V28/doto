import { getTaskStatusStyle, priorityColorMap, categoryColorMap } from "../../entities/task/lib/taskStyle"
import { Typography, Flex, Tag, Button } from "antd"
import type { Task } from "../../entities/task/model/types"
import { useDraftStore } from "../../entities/task/model/draftStore"
import { useNavigate } from "react-router-dom"
import styles from "./ui.module.css"


const { Text, Title } = Typography


export function TaskItem({task}: {task: Task}) {
    const {updateDraft} = useDraftStore()
    const navigate = useNavigate()

    const handleEditButtonClick = () => {
        updateDraft(task)
        navigate(`/task/${task.id}`)
    }

    const {color: statusColor, icon: statusIcon} = getTaskStatusStyle(task.status)
    const priorityColor = priorityColorMap[task.priority]
    const categoryColor = categoryColorMap[task.category]

    return (
        <div className={styles.container}>
            <Flex gap="small">
                <Tag icon={statusIcon} color={statusColor}>{task.status}</Tag>
                <Tag color={priorityColor}>{task.priority}</Tag>
            </Flex>
            <Title className={styles.truncate} level={2}>{task.title}</Title>
            <Text style={{color: categoryColor}}>{task.category}</Text>
            <Text className={styles.multiLineTruncate} type="secondary">{task.description}</Text>
            <Button className={styles.button} onClick={handleEditButtonClick}>Edit</Button>
        </div>
    )
}