import {Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import TaskData from './components/TaskData'
import Header from './components/Header'

function App() {

// Write code to display forms 
  // Components: Add New Task
      // Delete

  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* navbar */}
      <NavBar />
      <Route path='/'></Route>
      <Route path='/tasks'></Route>
      {/* forms */}
      <TaskData />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

//  https://api.airtable.com/v0/${base/Table%201
