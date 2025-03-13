import { useState } from "react"
import TaskForm from "./components/TaskForm"
import { Task } from "./types"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: Task) {
    setTasks([...tasks, task])
  }

  function getLastId() {
    let lastId = 0
    tasks.forEach(task => {
      if(task.id > lastId) {
        lastId = task.id
        return lastId
      }
    });
    return lastId
  }

  function completeTask(id: number) {
      const updatedTasks = tasks.map((task) => {
        if(task.id === id) {
          return {...task, status: "Done"}
        } else {
          return task
        }
      })
      setTasks(updatedTasks)
  }

  function deleteTask(id: number) {
    const tasksUpdated = tasks.filter((task) => task.id !== id)
    setTasks(tasksUpdated)
  }

  return (
    <>
      <h1 className="bg-gradient-to-r from-purple-500 to-red-600 text-white font-black py-6 text-center text-6xl">To Do List</h1>
      <TaskForm
      addTask = {addTask}
      getLastId = {getLastId}
      />
      <TaskList
      tasks = {tasks}
      completeTask = {completeTask}
      deleteTask = {deleteTask}
      />
    </>
  )
}

export default App
