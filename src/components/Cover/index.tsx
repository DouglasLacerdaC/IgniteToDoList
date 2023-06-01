import styles from './Cover.module.css'

import todoLogo from '../../assets/todo-logo.svg'

export function Cover() {
    return (
        <div className={styles.cover}>
            <img src={todoLogo} alt="Logo To-do" />
        </div>
    )
}