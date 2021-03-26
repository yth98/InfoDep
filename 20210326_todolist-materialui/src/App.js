import './App.css'
import { useState } from 'react'
import { TextField, Button, Box, Checkbox } from '@material-ui/core'

function App() {
  const [text, setText] = useState('')
  const [lists, setLists] = useState([])

  const randRange = (min, max) => {
    return Math.random() * (max-min) + min;
  }
  const apply = () => {
    setLists([...lists, {
      text,
      color: "rgb("+randRange(200,255)+","+randRange(200,255)+","+randRange(200,255)+")",
      done: false,
    }])
    setText('')
  }
  return (
    <div id="todo">
        <p style={{fontSize: '1.5em', fontWeight: 'bold', margin: '0.2em', textAlign: 'left'}}>My Todo List</p>
        <Box textAlign="center">
          <TextField variant="outlined" size="small" value={text} onChange={e => setText(e.target.value)} onKeyDown={e => {if (e.key==='Enter') apply()}}></TextField>
          <Button variant="contained" color="primary" onClick={apply}>Apply</Button>
        </Box>
        <div style={{padding: 0}}>
          {
            lists.map((list, idx) => 
              <Box display="flex" style={{backgroundColor: list.color}}>
                <Checkbox checked={list.done} onClick={() => setLists([...lists.slice(0, idx), {...list, done: !list.done}, ...lists.slice(idx+1)])}>✔️</Checkbox>
                <Box flexGrow={1} style={{textDecoration: list.done?'line-through':'', color: list.done?'gray':'black'}}>{list.text}</Box>
                <Button onClick={() => setLists([...lists.slice(0, idx), ...lists.slice(idx+1)])}>❌</Button>
              </Box>
            )
          }
        </div>
    </div>
  )
}

export default App
