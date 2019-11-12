import React, {useReducer} from 'react'

const reducer = (state,action) => {
  switch(action.type){
    case 'aumentar': return {clicks: state.clicks+1}
    case 'disimuir': return {clicks: state.clicks-1}
    default: throw new Error();
  }
}

const ContadorClicksReducer = () => { 

  //useReducer recibe : metodo y estado inicial
  const [state,dispatch] = useReducer(reducer, {clicks: 0});

  return (
    <div>
      <h4>Reducer</h4>
      <p>Van {state.clicks} clicks</p>
      <button onClick={()=>dispatch({type: 'aumentar'})}>Aumentar</button>
      <button onClick={()=>dispatch({type: 'disimuir'})}>Disminuir</button>
      
    </div>
  )
}
export default ContadorClicksReducer;