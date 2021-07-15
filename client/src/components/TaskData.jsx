import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskCard from './TaskCard'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/todos`

export default function TaskData() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get(BASE_URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
      setTask(res.data.records)
    }
    fetchTasks()
  }, [])


  return (
    <div>
      {tasks.map((todo) => {
        <TaskCard todo={todo} />
        return <TaskCard todo={todo} />
      })}
    </div>
  )
}
