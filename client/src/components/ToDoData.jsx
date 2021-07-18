import React, { useState } from 'react'
import Todoform from './Todoform'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit }from 'react-icons/ti'

function ToDoData({todos, completeTodo, removeTodo, updateTodo}) {
console.log(todos)
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    console.log(value)
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }
  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((task, index) =>(
    <div
      className={task.isComplete ? 'todo-row complete' : 'to-do-row'}
      key={index}>
      
      <div key={task.id} onClick={() => completeTodo(task.id)}>
        {task.fields.task}
      </div>

      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(task.id)}
          className='delete'
            />
        <TiEdit
          onClick={() => setEdit({ id: task.id, value: task.text })}
        className='icon'
        />

      </div>
    </div>
  )
  )
}

export default ToDoData