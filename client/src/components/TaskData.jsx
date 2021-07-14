import { useState, useEffect } from 'react'
import axios from 'axios'
const AT_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AT_BASE = process.env.REACT_APP_AIRTABLE_BASE

const BASE_URL = `https://api.airtable.com/v0/${AT_BASE}/Table%201`

export default function TaskData() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(BASE_URL, {headers: {Authorization: `Bearer ${AT_KEY}`}})
      
    }
    fetchTasks()
  }, [])


  return (
    <div>TaskData</div>
  )
}
