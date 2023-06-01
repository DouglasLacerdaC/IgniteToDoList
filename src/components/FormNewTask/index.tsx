import { PlusCircle } from "@phosphor-icons/react"

import styles from "./FormNewTask.module.css"

export function FormNewTask() {
    return (
        <form className={styles.formNewTask}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}