import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todolist/todoSlice'
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    todo: todoReducer,
  }),
});
