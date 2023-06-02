import { useEffect, useState } from 'react'

import { Cover } from './components/Cover'
import { EmptyList } from './components/EmptyList'
import { FormNewTask } from './components/FormNewTask'
import { InfoTasks } from './components/InfoTasks'
import { Task, TaskType } from './components/Task'

import styles from './App.module.css'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [tasksCompleted, setTasksCompleted] = useState<TaskType[]>([])

  useEffect(() => {
    const filterTasksCompleted = tasks.filter(task => {
      return task.isComplete == true
    })

    setTasksCompleted(filterTasksCompleted)
  }, [tasks])

  function createNewTask(newTask: TaskType) {
    setTasks((state) => {
      return [...state, newTask]
    })
  }

  function completedTask(id: string) {
    const newTasksCompleteds = tasks.map(task => {
      if (task.id == id) task.isComplete = !task.isComplete
      return task
    })

    setTasks(newTasksCompleteds)
  }

  function deleteTask(id: string) {
    const tasksWithOutDeleteOne = tasks.filter(task => {
      return task.id != id
    })

    setTasks(tasksWithOutDeleteOne)
  }

  return (
    <>
      <Cover />
      <main className={styles.container}>
        <FormNewTask createNewTask={createNewTask} />
        <div className={styles.tasks}>
          <InfoTasks created={tasks.length} done={tasksCompleted.length} />
          {tasks.length <= 0 ?
            <EmptyList /> 
            :
            <section className={styles.list}>
              {tasks.map(task => {
                return <Task key={task.id} task={task} completedTask={completedTask} deleteTask={deleteTask} />
              })}
            </section>
          }
        </div>
      </main>
    </>
  )
}
