import React, { useState } from 'react'
import { connect } from 'react-redux'
import store from '../../app/store'
import {
  addTodo,
  delTodo,
} from './todoSlice'

export default function Todolist() {
  const [content, setContent] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    store.dispatch(addTodo(content))
    setContent('')
  }
  const handleChangeContent = e => {
    setContent(e.target.value)
  }
  const Todo = connect(
    state => ({ todos: state.todo.todos }),
    dispatch => ({ delTodo: id => store.dispatch(delTodo(id)) }),
  )(props => {
    return store.getState().todo.todos.map(todo =>
      <div key={todo.id}>
        <span onClick={() => {props.delTodo(todo.id)}}>{todo.id}</span> <span>{todo.content}</span>
      </div>
    )
  })
  return (
    <div>
      <p>Todo list</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={content} onChange={handleChangeContent} />
        <button type="submit">Add todo</button>
      </form>
      <Todo />
    </div>
  )
}
