import { Form, Button, type FormInstance } from "antd";
import { useState, useEffect, type ReactNode } from "react"


export function SubmitButton({form, children}: {form: FormInstance, children: ReactNode}) {
    const [submitable, setSubmitable] = useState(false)

    const values = Form.useWatch([], form)

    useEffect(() => {
        form.
            validateFields({ validateOnly: true })
            .then(() => {setSubmitable(true)})
            .catch(() => {setSubmitable(false)})
    }, [form, values])

    return (
        <Button
        type="primary" 
        htmlType="submit"
        disabled={!submitable}>
            {children}
        </Button>
    )
}