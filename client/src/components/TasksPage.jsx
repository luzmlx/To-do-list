import React, {useState, useEffect } from 'react'
import Todoform from './Todoform'
import axios from 'axios'
import ToDoData from './ToDoData'
import { RiContactsBookLine } from 'react-icons/ri'


const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/todos`


function TasksPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await axios.get(BASE_URL, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
    //  console.log(res.data.records)
    setTodos(res.data.records)
  }

  const addTodo = async todo => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return
    // }

    let fields = todo

    const res = await axios.post(BASE_URL, {fields}, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
    fetchTasks()
    console.log(res)
    // const newTodos = [res.data, ...todos];

    // setTodos(newTodos);
    console.log(...todos)
    
  }

  const updateTodo = async (id, newVal) => {
    // 
const fields = {comments: newVal.task}

    const res = await axios.patch(`${BASE_URL}/${id}`, { fields }, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
    console.log(res)

    fetchTasks()
    // setTodos(prev => prev.map(item => (item.id === id ? newVal : item)))
    
  }

    const removeTodo = async id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      await axios.delete(`${BASE_URL}/${id}`, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
console.log(id)
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
        <h1>Get To It</h1>
        <h3 className="description"><b>Hey!</b> Stop being lazy, write down your todos and get to workin'!
        
        </h3>
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
