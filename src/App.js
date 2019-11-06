import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import Textarea from "./components/Textarea"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titulo : "",
      contenido : ""
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  render () {
    return (
      <div>
        <aside>
          <form onClick={this.crearEntrada}>
            <Input id="titulo" name="titulo" label="Titulo" onChange={this.onChange} value={this.state.titulo}/>
            <Textarea id="contenido" name="contenido" label="Contenido" onChange={this.onChange} value={this.state.contenido}/>
          </form>
        </aside>
      </div>
    );
    
  }
}

export default App;

/*
<div>
              <label htmlFor="contenido">Contenido</label>
              <textarea id="contenido" name="contenido" onChange={this.onChange} value={this.state.contenido}></textarea>
            </div>
*/