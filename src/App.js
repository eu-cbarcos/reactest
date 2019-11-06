import React from 'react';
//import './App.css';
import Input from "./components/Input";
import Textarea from "./components/Textarea"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      titulo : "",
      contenido : "",
      entradas: [],
    }
    this.onChange = this.onChange.bind(this);
    this.crearEntrada = this.crearEntrada.bind(this);
  }
  onChange (e) {
    this.setState({
      [e.target.id] : e.target.value,
    });
  }
  crearEntrada (e) {
    e.preventDefault();
    console.log("submitting...");
    this.setState({
      entradas: [...this.state.entradas,{
        titulo: this.state.titulo,
        contenido: this.state.contenido,
      }],
      titulo: '',
      contenido: '',
    });
  }
  render () {
    return (
      <div>
        <aside>
          <form onSubmit={this.crearEntrada} className="formulario">
            <Input id="titulo" name="titulo" label="Titulo" onChange={this.onChange} value={this.state.titulo}/>
            <Textarea id="contenido" name="contenido" label="Contenido" onChange={this.onChange} value={this.state.contenido}/>
            <button>Crear entrada</button>
          </form>
        </aside>
        <section>
          <ul>
            {
              this.state.entradas.map( (entrada,indice) => (
                <li key={indice}>
                  <h3>{entrada.titulo}</h3>
                  <p>{entrada.contenido}</p>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}
export default App;