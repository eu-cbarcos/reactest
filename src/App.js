import React from 'react';
//import './App.css';
import Input from "./components/Input";
import Textarea from "./components/Textarea"
import styled from '@emotion/styled'
import {darken} from 'polished'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import ContadorClicks from './components/ContadorClicks'
import ContadorClicksHooks from './components/ContadorClicksHook'
import ContadorClicksReducer from './components/ContadorClicksReducer'
import {Form} from './components/Form'
import {Switch,Route, BrowserRouter, Link, useParams, useLocation} from "react-router-dom"
import ThemeContext from './themeContext';


//const color = '#f1f2f3';
const color2 = '#369';
/*const ButtonStyled = styled.button`
  background: ${color2};
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  &:hover{
    background: ${darken(.1,color2)}    
  }
`;*/
const accentColor = '#f0b429';

const FaButtonStyled=styled.button`
  color: ${accentColor};
  background: ${color2};
  border: none;
  border-radius: 100%;
  dsiplay: flex;
  align-items: center;
  font-size: 1rem;
  height: 2rem;
  width: 2rem;
  box-shadow: 0 0 5px black;
  cursor: pointer;
  position: absolute;
  left: 14rem;
  top: 2rem;
`;

const AppStyle = styled.div`
  display: flex;
  .panel-admin{
    background-color: #0a558c;
    padding: 1rem;
    color: white;
    height: auto;
    min-height: 100vh;
    max-width: 15rem;
    transition: .3s all ease-in-out;

  }
  .contenido-princiapl{
    background: #f0f4f8;
    width: 100%;
  }
`;
const AsideStyle = styled.div`
`;

const Child = () => {
  let {id} = useParams();
  //let location = useLocation(); // query string
  //console.log(location.search);
  return (
    <div>
      <h3>ID : {id}</h3>
    </div>
  );
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      estadoCerrado: false,
      titulo : "",
      contenido : "",
      entradas: [{
        id: 'entrada-0',
        titulo: 'titulo',
        contenido: 'contenido'
      }],
    }
    this.onChange = this.onChange.bind(this);
    this.crearEntrada = this.crearEntrada.bind(this);
    this.ejecutarCerrado = this.ejecutarCerrado.bind(this);
  }
  ejecutarCerrado () {
    this.setState({
      estadoCerrado: !this.state.estadoCerrado,
    });
  }
  onChange (e) {
    this.setState({
      [e.target.id] : e.target.value,
    });
  }
  crearEntrada (e) {
    //e.preventDefault(); // ya lo manejo en el formjs
    console.log("submitting...");
    this.setState({
      entradas: [...this.state.entradas,{
        titulo: this.state.titulo,
        contenido: this.state.contenido,
        id: 'entrada-' +this.state.entradas.length
      }],
      titulo: '',
      contenido: '',
    });
  }
  render () {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul className="flex justify-center">
              <li className="mx-4 uppercase">
                <Link to="/">Inicio</Link>
              </li>
              <li className="mx-4 uppercase">
              <Link to="/acerca">Acerca</Link>
              </li>
              <li className="mx-4 uppercase">
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        
        <Switch>
        
          <Route exact path="/">    
            <AppStyle>
              <AsideStyle className={`panel-admin ${this.state.estadoCerrado}?cerrado:`}>
              <FaButtonStyled onClick={this.ejecutarCerrado}>
                {this.state.estadoCerrado && <FaChevronRight/>}
                {!this.state.estadoCerrado && <FaChevronLeft/>}
              </FaButtonStyled>

                <Form crearEntradaProps={this.crearEntrada} myClass="formulario">
                  <Input id="titulo" name="titulo" label="Titulo" onChange={this.onChange} value={this.state.titulo}/>
                  <Textarea id="contenido" name="contenido" label="Contenido" onChange={this.onChange} value={this.state.contenido}/>
                </Form>

              </AsideStyle>
              <section className="contenido-principal px-12">

              <ul>
                {this.state.entradas.map( (entrada) => (
                  <li key={entrada.id}>
                    <h3>{entrada.titulo}</h3>
                    <p>{entrada.contenido}</p>
                    <p dangerouslySetInnerHTML={{__html: entrada.contenido}}
                    ></p>
                  </li>
                ))}
              </ul>

                <ThemeContext.Provider value={{
                  color:'red',size:25
                }}>

                  <ThemeContext.Consumer>{()=>(
                    <ContadorClicks/>
                  )}</ThemeContext.Consumer>
                
                </ThemeContext.Provider>

                {!this.state.estadoCerrado && 
                  <ThemeContext.Consumer>{()=>(
                    <ContadorClicksHooks/>
                  )}</ThemeContext.Consumer>
                }

                <br />
                <ContadorClicksReducer />
              </section>
            </AppStyle>
          </Route>
          <Route path="/acerca">
            <div>
              <h1>Acerca de: </h1>
            </div>
          </Route>
          <Route path="/contacto">
            <div>
              <h1>Contactenos... </h1>
            </div>
          </Route>
          <Route path="/user/:id" children={<Child />} />
          <Route path="*">
            <div>
              <h1>404!</h1>
            </div>
          </Route>
          
        </Switch>
        
        
      </BrowserRouter>
    );
  }
}
export default App;