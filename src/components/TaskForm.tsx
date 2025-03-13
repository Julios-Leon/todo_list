import { FormEvent, useState } from "react"
import { Task } from "../types"

type TaskFormProps = {
    addTask: (task: Task) => void
    getLastId: () => number
}

const TaskForm = ({addTask, getLastId} : TaskFormProps) => {

    function addTaskHandler(e: FormEvent) {
        e.preventDefault()   
        
        const taskToAdd: Task = {
            id: getLastId() + 1,
            name: taskName,
            description: taskDescription,
            status: "Ongoing"
        }

        addTask(taskToAdd)
    }

    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
  return (
    <div className="max-w-md mx-auto mt-8">
      <form 
      className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
      onSubmit={addTaskHandler}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">New Task</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskTitle">
            Task Title
          </label>
          <input 
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
            id="taskTitle"
            type="text" 
            placeholder="Set a title"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
            Description
          </label>
          <input 
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
            id="taskDescription"
            type="text" 
            placeholder="Set a description"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
          />
        </div>
        
        <div className="flex items-center justify-end">
          <button 
            className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-purple-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer" 
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
