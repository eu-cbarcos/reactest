import React, {useState} from 'react'

const ContadorClicksReducer = () => { 

  const [click,setClick] = useState(0);

  const aumentar = () => {
    setClick(click + 1);
  }

  const disminuir = () => {
    setClick(click - 1);
  }

  return (
    <div>
      <h4>Reducer</h4>
      <p>Van {click} clicks</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      
    </div>
  )
}
export default ContadorClicksReducer;