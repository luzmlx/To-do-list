import React, {useState, useEffect} from 'react'
import Todoform from './Todoform'
import axios from 'axios'
import ToDoData from './ToDoData'


const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/todos`


function TasksPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(BASE_URL, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
      //  console.log(res.data.records)
      setTodos(res.data.records)
    }
    fetchTasks()
  })

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos)
    
  }

  const updateTodo = (todoId, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newVal : item)))
    
  }

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr)
    }

    const completeTodo = id => {
      let updatedTodo = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodo)
    }

    return (
      <div>
        <h1>Today's Agenda</h1>
        <Todoform onSubmit={addTodo} />
        <ToDoData
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      
      </div>
    )
  }

  export default TasksPage
