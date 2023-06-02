import styles from './InfoTasks.module.css'

interface InfoTasksProps {
    created: number,
    done: number
}

export function InfoTasks({ created, done }: InfoTasksProps) {
    return (
        <section className={styles.info}>
            <div className={styles.created}>
                <strong>Tarefas criadas</strong>
                <span>{created}</span>
            </div>
            <div className={styles.done}>
                <strong>Concluídas</strong>
                <span>
                    {created > 0 ?
                       `${done} de ${created}` :
                        created
                    }
                </span>
            </div>
        </section>
    )
}