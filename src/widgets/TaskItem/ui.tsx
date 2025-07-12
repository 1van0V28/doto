import { categoryColorMap, getTaskStatusStyle, priorityColorMap } from "../../entities/task/lib/taskStyle"
import { Card, Flex, Tag, Typography, Button } from "antd"
import type { Task } from "../../entities/task/model/types"



const { Text, Title } = Typography


export function TaskItem({task}: {task: Task}) {
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
            <Button>Edit</Button>
        </Card>
    )
}