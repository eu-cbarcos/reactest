import React, {useState} from 'react'
import Input from './Input';
import { withLog } from './withLog';

const ContadorClicksHooks = () => {

  // 0 valor por defecto
  const [click,setClicks] = useState(0);
  // "" valor inicial
  const [nombre,setNombre] = useState("");
  //const [objeto,setObjeto] = useState("");

  const aumentar = () => {
    setClicks(click + 1);
  }

  // didMount
  /*React.useEffect(()=>{
    console.log("Llamada a useEffect", click, nombre);
  },[]);*/ 

  // didUpdate
/*  React.useEffect(()=>{
    console.log("Llamada a useEffect", click, nombre);
  },[click,nombre]);*/


  React.useEffect(()=>{
    console.log("Llamada a useEffect", click);
    const timeout = setTimeout(()=>{
      console.log("llamada asincrona");
    },3000);
    return () =>{
      console.log("Parecido a componentWillUnmount");
      clearTimeout(timeout);
    }
  },[click,nombre]);

  return (
    <div className="border-gray-300 px-5">
      <h4>Hooks</h4>
      <p>van {click}</p>
      <button onClick={aumentar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click</button>
      <Input
        className="px-5"
        name="nombre" 
        id="nombre" 
        label="nombre" 
        value={nombre}
        onChange={e=>setNombre(e.target.value)}
      />
      <p className="text-gray-600">{nombre}</p>
    </div>
  )
}
export default withLog(ContadorClicksHooks);