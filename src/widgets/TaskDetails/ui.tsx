import { Form, Space, Input, Select, Radio, Button } from "antd"
import { SELECT_CATEGORY_OPTIONS, RADIO_STATUS_OPTIONS,RADIO_PRIORITY_OPTIONS } from "../../entities/task/model/const"
import { useTaskStore } from "../../entities/task/model/store"
import { useDraftStore } from "../../entities/task/model/draftStore"
import { useNavigate } from "react-router-dom"
import type { Task, DraftTask } from "../../entities/task/model/types"


export function TaskDetails() {
    const {saveTask, deleteTask} = useTaskStore()
    const {draft, updateDraft} = useDraftStore()
    const [form] = Form.useForm()
    const navigate = useNavigate()
    
    form.setFieldsValue(draft)

    const handleSaveTask = async () => {
        try {
           await form.validateFields()
           saveTask(draft as Task)
           navigate("/")
        } catch(error) {
            console.warn("Validation error:", error);
        }
    }

    const handleDeleteTask = () => {
        deleteTask(draft.id)
        navigate("/")
    }

    const handleUpdateDraft = (changedValue: Partial<DraftTask>) => {
        updateDraft({...draft, ...changedValue})
    }

    return (
        <Space>
            <Form
            form={form}
            layout="vertical"
            onValuesChange={handleUpdateDraft}>
                <Form.Item
                name="title"
                rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item 
                name="category"
                rules={[{required: true}]}>
                    <Select
                    options={SELECT_CATEGORY_OPTIONS}/>
                </Form.Item>

                <Form.Item
                name="status"
                rules={[{required: true}]}>
                    <Radio.Group 
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
                    autoSize={{minRows: 4, maxRows: 4}}/>
                </Form.Item>

                <Form.Item>
                    <Button 
                    type="primary" 
                    htmlType="submit"
                    onClick={handleSaveTask}>
                        Save
                    </Button>
                </Form.Item>
            </Form>

            <Button 
            onClick={handleDeleteTask}danger>
                Delete
            </Button>
        </Space>
    )
}