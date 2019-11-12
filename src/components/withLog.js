import React from 'react'

export const withLog = Component => {
  return class extends React.Component{
    componentDidMount(){
      console.log("dentro de: componentDidMount");
    }
    componentWillMount(){
      console.log("dentro de: componentWillMount");
    }
    componentDidUpdate(){
      console.log("dentro de: componentDidUpdate"); // se atualiza hijo no padre, por eso no muestra nada... el padre no actualiza nada
    }
    render () {
      return <Component {...this.props} />
    }
  }
}
