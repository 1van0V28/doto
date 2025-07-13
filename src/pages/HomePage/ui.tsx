import { TaskList } from "../../widgets/TaskList/ui"
import styles from "./ui.module.css"


export function HomePage() {
    return (
        <div className={styles.container}>
            <TaskList/> 
        </div>
    )
}