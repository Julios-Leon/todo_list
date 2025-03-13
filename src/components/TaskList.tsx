import { Task } from "../types"

type TaskListProps = {
    tasks: Task[]
    completeTask: (id: number) => void
    deleteTask: (id: number) => void
}
const TaskList = ({tasks, completeTask, deleteTask} : TaskListProps) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-red-500 to-purple-600">
            <h1 className="text-xl font-bold text-white">Task List <span className="bg-gray-400 rounded-2xl px-2 ">{tasks.length}</span></h1>
        </div>
        
        {tasks.length === 0 ? (
            <div className="p-6 text-center">
                <p className="text-gray-500">No tasks available</p>
            </div>
        ) : (
            <div className="flex flex-wrap p-4 gap-4">
                {tasks.map((task) => (
                    <div 
                        key={task.id} 
                        className="p-4 hover:bg-gray-50 transition-colors duration-150 border rounded-lg shadow-sm flex-1 basis-full sm:basis-[calc(50%-0.5rem)] md:basis-[calc(33.333%-0.75rem)] lg:basis-[calc(25%-0.75rem)]"
                    >
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                                <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                                    ${task.status === 'Done' ? 'border-green-500 bg-green-100' : 'border-blue-400'}`}>
                                    {task.status === 'Done' && (
                                        <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className={`font-medium ${task.status === 'Done' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                    {task.name}
                                </h3>
                                {task.description && (
                                    <p className="mt-1 text-sm text-gray-500">{task.description}</p>
                                )}
                                <span className={`mt-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                                    ${task.status === 'Done' ? 'bg-green-100 text-green-800' : 
                                        task.status === 'in_progress' ? 'bg-blue-100 text-blue-800' : 
                                        'bg-gray-100 text-gray-800'}`}>
                                    {task.status}
                                </span>
                                <div className="mt-3 flex space-x-2">
                                    <button 
                                        onClick={() => completeTask(task.id)} 
                                        className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                                        disabled={task.status === 'Done'}
                                    >
                                        Complete
                                    </button>
                                    <button 
                                        onClick={() => deleteTask(task.id)} 
                                        className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default TaskList
