

const box = ({clickBox, boxObj }) => {
  return (
    <div className={boxObj.clicked ? 'darkbox':'lightbox'} onClick={() => clickBox(boxObj.id)}
    
    ></div>
  )
}



export default box