// import React from 'react'
import {Link} from 'react-router-dom'

export default function TaskCard(props) {
  return (
    <Link to={`/todos/${props.task}`}>

    
    <div>
      <h2> {props.todo.fields.task}</h2>
      <p>{props.todo.fields.date} <br />
        {props.todo.fields.comments}</p>
      </div>
      </Link>
  )
}
