import React from 'react';
import {useSubmit} from '../hooks/useSubmit';

const Form = ({children,crearEntradaProps,myClass}) => {

  const onSubmit = (event) => {
    //event.persist();
    event.preventDefault();
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        //reject('Ocurrio un error');
        resolve(crearEntradaProps());
      },10);
    });
  }

  const [handleSubmit,loading,error] = useSubmit(onSubmit);

  const errorMsg = error ? <p className="text-center bg-yellow-300 text-red-700 rounded">{error}</p> : null;

  return (
    <form onSubmit={handleSubmit} className={myClass}>
      {errorMsg}
      {children}
      <button 
        disabled={loading} 
        className={`${loading?'bg-blue-100 text-black cursor-not-allowed':'bg-blue-500 hover:bg-blue-700 text-white'} font-bold py-2 px-4 rounded`} 
      >Crear entrada</button>
    </form>
  )
}
export default Form;