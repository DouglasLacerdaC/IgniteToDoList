import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from "@phosphor-icons/react"
import { TaskType } from "../Task"
import { ChangeEvent, FormEvent, useState } from "react"

import styles from "./FormNewTask.module.css"

interface FormNewTaskProps {
    createNewTask: (task: TaskType) => void
}

export function FormNewTask({ createNewTask }: FormNewTaskProps) {

    const [titleText, setTitleText] = useState<string>('')

    function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitleText(event.target.value)
    }

    function handleNewTask(event: FormEvent) {
        event.preventDefault()

        createNewTask({
            id: uuidv4(),
            title: titleText,
            isComplete: false
        })

        setTitleText('')
    }

    return (
        <form onSubmit={handleNewTask} className={styles.formNewTask}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={titleText}
                onChange={handleTitleChange}
            />
            <button type="submit">
                Criar
                <PlusCircle size={18} />
            </button>
        </form>
    )
}