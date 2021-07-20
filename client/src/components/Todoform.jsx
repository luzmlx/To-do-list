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
      
      task: input
})
    setInput('')
  }


  return (
    
    <form onSubmit={handleSubmit}
      className='todoform'>
      {props.edit ? (<> 
        
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
