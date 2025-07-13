import { TaskDetails } from "../../widgets/TaskDetails/ui"
import styles from "./ui.module.css"


export function EditPage() {
    return (
        <div className={styles.container}>
            <TaskDetails/>
        </div>    
    )
}