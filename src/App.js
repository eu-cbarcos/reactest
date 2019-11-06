import React from 'react';
//import './App.css';
import Input from "./components/Input";
import Textarea from "./components/Textarea"
import styled from '@emotion/styled'

const ButtonStyled = styled.button`
  background: #369;
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
`;


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
            <ButtonStyled>Crear entrada</ButtonStyled>
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