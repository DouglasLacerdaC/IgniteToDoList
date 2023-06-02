import { Check, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface TaskType {
    id: string,
    title: string,
    isComplete: boolean
}

interface TaskProps {
    task: TaskType,
    completedTask: (id: string) => void,
    deleteTask: (id: string) => void
}

export function Task({ task, completedTask, deleteTask }: TaskProps) {

    function handleCompleteTask() {
        completedTask(task.id)
    }

    function handleDeleteTask() {
        deleteTask(task.id)
    }

    return (
        <article className={styles.task}>
            <button className={`${styles.checkbox} ${task.isComplete ? styles.checked : ''}`} onClick={handleCompleteTask}>
                <Check size={14} />
            </button>
            <p className={task.isComplete ? styles.completed : ''}>
                {task.title}
            </p>
            <button className={styles.trash} onClick={handleDeleteTask}>
                <Trash size={16} />
            </button>
        </article>
    )
}