import React from 'react'
import Box from './Box'
const grid = ({clickBox, buttonClicked, boxes}) => {
  return (

    boxes.map(box => {
      return <Box clickBox={clickBox} key = {box.id} boxObj = {box}/>
    })

    // <div>
    //   <div className = 'count'>Count: {boxes.length} </div>
      
    //   <div className = 'grid'>
    //     <Box clickBox={clickBox} id = {1}/>
    //     <Box clickBox={clickBox} id = {2}/>
    //     <Box clickBox={clickBox} id = {3}/>
    //     <Box clickBox={clickBox} id = {4}/>
    //   </div>
    // </div>
  )
}

export default grid