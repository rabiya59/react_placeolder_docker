import React from 'react'
import { NavLink } from 'react-router-dom'
import { Todo } from '../../../modeles/Todo.type'

// Typage des props de React en TS
type TodoProps = {
  todo: Todo
}

const TodoItem = ({todo}: TodoProps) => {
  return (
    <li><NavLink to={`/todos/${todo.id}`}>{todo.title}</NavLink> {todo.completed ? '✔' : '❌'}</li>
  )
}

export default TodoItem;
