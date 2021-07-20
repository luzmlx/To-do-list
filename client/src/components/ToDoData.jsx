import React  from 'react'

import { RiCloseCircleLine} from 'react-icons/ri'


function ToDoData({todos, completeTodo, removeTodo}) {
console.log(todos)
  

  

  return todos.map((task, index) =>(
    <div
      className={task.isComplete ? 'todo-row complete' : 'to-do-row'}
      key={index}>
      
      <div
      className="taskinput"
        key={task.id} onClick={() => completeTodo(task.id)}>
        {task.fields.task} 
      </div>

      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(task.id)}
          className='delete'
            />
        

      </div>
    </div>
  )
  )
}

export default ToDoData
