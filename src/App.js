import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Input from "./components/Input"

const onChange = () => {
  console.log("onChange");
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.eliminarNombreInput = this.eliminarNombreInput.bind(this);
    this.eliminarEmailInput = this.eliminarEmailInput.bind(this);
    this.state = {
      inputNombreEliminado: false,
      inputEmailEliminado: false,
    }
  }
  eliminarNombreInput (e) {
    this.setState({
      inputNombreEliminado: !this.state.inputNombreEliminado
    })
  }
  eliminarEmailInput (e) {
    this.setState({
      inputEmailEliminado: !this.state.inputEmailEliminado
    })
  }
  render () {
    const input_nombre = this.state.inputNombreEliminado ? <div /> : <Input id="nombre" name="nombre" label="Nombre" onChange={onChange}/> ;
    const input_email = this.state.inputEmailEliminado ? <div /> : <Input id="email" name="email" label="Email" onChange={onChange}/> ;
    //{!this.state.inputEliminado && (<Input id="nombre" name="nombre" label="Nombre" onChange={onChange}/>)}
    return (
      <div className="App">
        <header className="App-header">
          {input_nombre}<button onClick={this.eliminarNombreInput}>Show/Hide</button>
          {input_email}<button onClick={this.eliminarEmailInput}>Show/Hide</button>
        </header>
      </div>
    );
  }
}

export default App;
