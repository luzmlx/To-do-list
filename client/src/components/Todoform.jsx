import React, {useState} from 'react'

export default function Todoform(props) {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
})
    
    
    setInput('')
  }

  return (
    
    <form className='todoform'
      onSubmit={handleSubmit}>
      
      <input type='text' placeholder='Add To Do' value={input}
        name='text' className='todoinput'
        onChange={handleChange}/>
      
      <button className='todobutton'> Add To-Do</button>
      <div>
        <h2>
        
        </h2>
      </div>
    </form>
    



  )
}
