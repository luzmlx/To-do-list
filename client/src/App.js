import React from 'react'
import './App.css'
import Todoform from './components/Todoform'

import {Link} from 'react-router-dom'
import TasksPage from './components/TasksPage'

function App() {

// Write code to display forms 
  // Components: Add New Task
      // Delete

  return (
    <div className="App">
      
      {/* <Link>Home</Link><br /> */}
      {/* <Link to='/Todoform'>Tasks</Link> */}
      {/* < Route path='/todoform'> */}
      <Link to="/TasksPage"><button>Tasks</button></Link>
      {/* <TaskPage /> */}
      
      <h3 classname="description">
        Do you have trouble remembering all the things you have to do?
        If so, click that tasks button to get started on your to-do list!

        <br /> Hope you enjoy this free to-do website.
      </h3>
    </div>
  );
}

export default App;

//  https://api.airtable.com/v0/${base/todos
