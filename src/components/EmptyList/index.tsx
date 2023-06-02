import clipboard from '../../assets/clipboard.svg'

import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <article className={styles.emptyList}>
            <img src={clipboard} alt="Icone ilustrativo de prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </article>
    )
}