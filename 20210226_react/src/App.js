import React, { useState } from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClickIncrease = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }
  handleClickDecrease = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }))
  }
  render() {
    return (
      <div>
        <h2>This is a counter with Class</h2>
        <p>
          {this.state.counter}
        </p>
        <button onClick={this.handleClickIncrease}>increase</button>
        <button onClick={this.handleClickDecrease}>decrease</button>
      </div>
    )
  }
}

function CounterHook(props) {
  const [counter, setCounter] = useState(0)
  const handleClickIncrease = () => setCounter(counter + 1)
  const handleClickDecrease = () => setCounter(counter - 1)
  return (
    <div>
      <h2>This is a counter with Hook</h2>
      <p>
        {counter}
      </p>
      <button onClick={handleClickIncrease}>increase</button>
      <button onClick={handleClickDecrease}>decrease</button>
      { counter > 5 && 'This is greater than five' }
    </div>
  )
}

function WhatsYourInput(props) {
  return (
    <>
      <input value={props.text} onChange={props.handleTextChange} />
      <h3>{props.input}</h3>
    </>
  )
}

function TextInput() {
  const [text, setText] = useState('')
  const handleTextChange = e => {
    setText(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(text)
  }
  return (
    <div>
      <h2>This is a form</h2>
      <form onSubmit={handleSubmit}>
        <WhatsYourInput input={text} handleTextChange={handleTextChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

function TodoList(props) {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const handleTextChange = e => {
    setText(e.target.value)
  }
  const appendItem = () => {
    console.log(list, text)
    setList([...list, text])
  }
  return (
    <div>
      <h2>This is a Todo List</h2>
      <WhatsYourInput input={text} handleTextChange={handleTextChange} />
      <button onClick={appendItem}>append</button>
      <ul>
      {
        list.map(item => (<li>{item}</li>))
      }
      </ul>
    </div>
  )
}

function App() {
  const counter = <Counter />
  return (
    <div className="App">
      {counter}
      <CounterHook />
      <TextInput />
      <TodoList />
    </div>
  );
}

export default App;
