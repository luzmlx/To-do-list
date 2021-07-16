import React, {useEffect} from 'react'
import './App.css'
import axios from 'axios'
import TasksPage from './components/TasksPage'

const base = new Airtable({ apikey: 'keyYp6q4MpjG7wbaf' }).base('appNknbhvju5qbbaq')

function App() {

// Write code to display forms 
  // Components: Add New Task
      // Delete
  
  useEffect(() => {
    base("todos")
      .select({ view: 'Grid view' })
      .eachTask((records, fetchTask) => {
        console.log(records);
        fetchTask()
    })
  }, [])


  return (
    <div className="App">

      
      <TasksPage />

        
      
      <h3 className="description">
        Do you have trouble remembering all the things you have to do?
        If so, click that tasks button to get started on your to-do list!

        <br /> Hope you enjoy this free to-do website.
      </h3>
    </div>
  );
}

export default App;

//  https://api.airtable.com/v0/${base/todos
