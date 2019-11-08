import React, {useState} from 'react'
import Input from './Input';

const ContadorClicksHooks = () => {

  // 0 valor por defecto
  const [click,setClicks] = useState(0);
  // "" valor inicial
  const [nombre,setNombre] = useState("");
  const [objeto,setObjeto] = useState("");

  const aumentar = () => {
    setClicks(click + 1);
  }

  return (
    <div className="border-gray-300 px-5">
      <h4>Hooks</h4>
      <p>van {click}</p>
      <button onClick={aumentar}>click</button>
      <Input
        className="px-5"
        name="nombre" 
        id="nombre" 
        label="nombre" 
        value={objeto.nombre}
        onChange={e=>setObjeto({
          nombre: e.target.value
        })}
      />
      <p className="text-gray-600">{objeto.nombre}</p>
    </div>
  )
}
export default ContadorClicksHooks;