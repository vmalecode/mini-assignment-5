import Box from './components/Box'
import Grid from './components/Grid'
import { useState, useEffect } from 'react'
function App() {
  const [boxes, setBoxes] = useState([
    {id: 0, name : 'box1', clicked: false},
    {id: 1, name : 'box2', clicked: false},
    {id: 2, name : 'box3', clicked: false},
    {id: 3, name : 'box4', clicked: false}

])

  const clickBox = (id) => {
    let currentBox
    setBoxes(
      boxes.map((box) =>
      box.id === id ? { ...box, clicked: !box.clicked } : box
      )
    )
    console.log("CLICKED  button!!!!", id)
  }
  
  return (
    <div className="App">
      <h1>Count: {boxes.filter(box => box.clicked).length}</h1>
      <div className="grid">
        <Grid clickBox={clickBox} boxes = {boxes}/>
      </div>

    </div>
  );
}

export default App;
