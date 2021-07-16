import React, { useState, useEffect, useRef } from 'react'



export default function Todoform(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      // id: Math.floor(Math.random() * 10000),
      text: input
})
    setInput('')
  }


  return (
    
    <form onSubmit={handleSubmit}
      className='todoform'>
      {props.edit ? (<> 
        <input placeholder='Add Comments' value={input}
          onChange={handleChange} name='text'
          ref={inputRef} />
        <button onClick={handleSubmit} className='todo-comment button'>
          Comment
        </button>
      </>
        ):(
        <>
          <input type='text' placeholder='Add To Do' value={input}
            name='text' className='todoinput'
            onChange={handleChange} ref={inputRef}/>
      
      <button onClick={handleSubmit}
        className='todobutton'> Add To-Do</button>
        
          </>
        )}
    </form>
    



  )
}
