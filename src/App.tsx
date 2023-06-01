import styles from './App.module.css'
import { Cover } from './components/Cover'
import { FormNewTask } from './components/FormNewTask'
import './global.css'

export function App() {

  return (
    <>
      <Cover />
      <main className={styles.container}>
        <FormNewTask />
        concluidas
      </main>
    </>
  )
}
