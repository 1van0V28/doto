import { getTaskStatusStyle, priorityColorMap, categoryColorMap } from "../../entities/task/lib/taskStyle"
import { Typography, Card, Flex, Tag, Button } from "antd"
import type { Task } from "../../entities/task/model/types"
import { useDraftStore } from "../../entities/task/model/draftStore"
import { useNavigate } from "react-router-dom"


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
        <Card>
            <Flex gap="small">
                <Tag icon={statusIcon} color={statusColor}>{task.status}</Tag>
                <Tag color={priorityColor}>{task.priority}</Tag>
            </Flex>
            <Title level={2}>{task.title}</Title>
            <Text style={{color: categoryColor}}>{task.category}</Text>
            <Text type="secondary">{task.description}</Text>
            <Button onClick={handleEditButtonClick}>Edit</Button>
        </Card>
    )
}