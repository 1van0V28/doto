import { Form, Card, Input, Select, Radio, Flex, Button } from "antd"
import { SELECT_CATEGORY_OPTIONS, RADIO_STATUS_OPTIONS,RADIO_PRIORITY_OPTIONS } from "../../entities/task/model/const"
import { useTaskStore } from "../../entities/task/model/store"
import { useDraftStore } from "../../entities/task/model/draftStore"
import { useNavigate } from "react-router-dom"
import type { Task, DraftTask } from "../../entities/task/model/types"
import { SubmitButton } from "../../shared/SubmitButton"
import styles from "./ui.module.css"


export function TaskDetails() {
    const {saveTask, deleteTask} = useTaskStore()
    const {draft, updateDraft} = useDraftStore()
    const [form] = Form.useForm()
    const navigate = useNavigate()
    
    form.setFieldsValue(draft)

    const handleSaveTask = () => {
        saveTask(draft as Task)
        navigate("/")
    }

    const handleDeleteTask = () => {
        deleteTask(draft.id)
        navigate("/")
    }

    const handleUpdateDraft = (changedValue: Partial<DraftTask>) => {
        updateDraft({...draft, ...changedValue})
    }

    return (
        <Card
        className={styles.container}>
            <Form
            form={form}
            onValuesChange={handleUpdateDraft}
            onFinish={handleSaveTask}>
                <Form.Item
                name="title"
                rules={[{required: true}]}>
                    <Input
                    placeholder="What needs to be done?"/>
                </Form.Item>

                <Form.Item 
                name="category"
                rules={[{required: true}]}>
                    <Select
                    options={SELECT_CATEGORY_OPTIONS}
                    placeholder="Tap to categorize..."/>
                </Form.Item>

                <Form.Item
                name="status"
                rules={[{required: true}]}>
                    <Radio.Group 
                    className={styles.radiogroup}
                    options={RADIO_STATUS_OPTIONS} 
                    optionType="button"
                    buttonStyle="solid" block/>
                </Form.Item>

                <Form.Item 
                name="priority"
                rules={[{required: true}]}>
                    <Radio.Group
                    options={RADIO_PRIORITY_OPTIONS} 
                    optionType="button"
                    buttonStyle="solid" block/>
                </Form.Item>

                <Form.Item
                name="description">
                    <Input.TextArea 
                    autoSize={{minRows: 4, maxRows: 4}}
                    placeholder="Add more details or context..."/>
                </Form.Item>

                <Flex
                gap="large">
                    <Button 
                    onClick={handleDeleteTask} danger>
                        Delete
                    </Button>

                    <Form.Item>
                        <SubmitButton
                        form={form}>
                            Save
                        </SubmitButton>
                    </Form.Item>
                </Flex>
            </Form>
        </Card>
    )
}