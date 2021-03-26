import React from 'react'
import { useSelector } from 'react-redux'
import { Counter } from './features/counter/Counter'
import ExampleRedux from './features/counter/ExampleRedux'
import ExampleWithoutRedux from './features/counter/ExampleWithoutRedux'
import Todolist from './features/todolist/Todolist'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ExampleRedux />
        <ExampleWithoutRedux count={useSelector(state => state.counter.value)} />
        <Todolist />
      </header>
    </div>
  )
}

export default App
