import React, {useState} from 'react'

export default function Todoform() {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    
    
    setInput('')
  }

  return (
    <form className='todoform'
      onSubmit={handleSubmit}>
      
      <input type='text' placeholder='Add To Do' value={input}
        name='text' className='todoinput'
        onChange={handleChange}/>
      
      <button className='todobutton'> Add To-Do</button>
      </form>
  )
}
