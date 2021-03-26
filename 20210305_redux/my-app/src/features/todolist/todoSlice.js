import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    lastId: 0,
  },
  reducers: {
    /** 
     * add a todo
     * @param {*} string
      */
    addTodo: (state, action) => {
      const content = action.payload
      state.todos.push({id: state.lastId, content})
      state.lastId += 1
    },
    delTodo: (state, action) => {
      const todoId = action.payload
      const index = state.todos.findIndex(todo => todo.id === todoId)
      state.todos.splice(index, 1)
    },
  },
});

export const { addTodo, delTodo } = todoSlice.actions

export const selectTodo = state => state.todo.todos

export default todoSlice.reducer
