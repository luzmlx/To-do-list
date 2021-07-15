import React, {useState} from 'react'
import Todoform from './Todoform'


function TasksPage() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    
  }


  return (
    <div>
      <h1>Today's Agenda</h1>
      <Todoform />
    </div>
  )
}

export default TasksPage

