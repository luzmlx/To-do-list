import React, {useState, useEffect } from 'react'
import Todoform from './Todoform'
import axios from 'axios'
import ToDoData from './ToDoData'



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
   
    setTodos(res.data.records)
  }

  const addTodo = async todo => {
    

    let fields = todo

    const res = await axios.post(BASE_URL, {fields}, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
    fetchTasks()
    console.log(res)
   
    console.log(...todos)
    
  }



    const removeTodo = async id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      await axios.delete(`${BASE_URL}/${id}`, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
console.log(id)
      setTodos(removeArr)
    }

  
  
  

    return (
      <div>
        <h1>Get To It</h1>
        <h3 className="description"><b>Hey!</b> Stop being lazy, write down your todos and get to workin'!
        
        </h3>
        <Todoform onSubmit={addTodo} />
        <ToDoData 
          todos={todos}
         
          removeTodo={removeTodo}
          
        />
        
      
      </div>
    )
  }

  export default TasksPage
