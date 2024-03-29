import React,{Suspense, useEffect} from 'react';
//import './App.css';
import Input from "./components/Input";
import Textarea from "./components/Textarea"
import styled from '@emotion/styled'
//import {darken} from 'polished'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import ContadorClicks from './components/ContadorClicks'
import ContadorClicksHooks from './components/ContadorClicksHook'
import ContadorClicksReducer from './components/ContadorClicksReducer'
//import {Form} from './components/Form'
import {Switch,Route, BrowserRouter, Link, 
  useParams
  //,   useLocation
} from "react-router-dom"
import ThemeContext from './themeContext';
//import Loadable from 'react-loadable'
import Portal from './components/Portal'
import {useQuery, useMutation, useSubscription} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useReducer} from 'react'

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

//const Form = Loadable({
//  loader: () => import(/* webpackChunkName: "formularioAsync" */ './components/Form'),
//  loading: ()=><div>Cargando...</div>,
//  modules: ['formularioAsync']
//});

const Form = React.lazy(() => import(/* webpackChunkName: "formularioAsync" */ './components/Form'));

const POST_SUBSCRIPTION = gql`
  subscription onPostAdded{
    postAdded {
      id
      title
      description
    }
  }
`;
const Lista = () => {

  const subscription = useSubscription(POST_SUBSCRIPTION);

  const POSTS_QUERY = gql`
    query {
      posts {
        id
        title
        description
      }
    }
  `;

  const POSTS_MUTATION = gql`
  mutation CreatePost($title: String!,$description: String!){
    createPost(title: $title,description: $description){
      id
      title
      description
    }
  }
  `;

  const {loading,error,data} = useQuery(POSTS_QUERY);
  const [addPost,postData] = useMutation(POSTS_MUTATION);

  const [state,setState] = useReducer((state,action)=>{
    return {...state,...action}
  },{
    title: '',
    description: '',
    posts: []
  });


  const onChange = e => {
   setState({
     [e.target.id]: e.target.value
   });
  }




  useEffect(()=>{
    setState({
      posts: data ? data.posts: []
    });
  },[data]);

  
  useEffect(()=>{
    if(subscription.data){
      setState({
        posts: [
          ...state.posts.slice(), 
          {...subscription.data.postAdded}
        ]
      });
    }
  },[subscription.data]);






  if(loading) return <p>Cargando...</p>
  if(error) return <p>Error...</p>


  return (
    <div>
      <form onSubmit={e=>{
        e.preventDefault();
        addPost({
          variables:{
            title: state.title,
            description: state.description,
          }
        });
        setState({
          title: '',
          description: ''
        });
      }}>
        <input id="title" name="title" value={state.title} onChange={onChange} />
        <input id="description" name="description" value={state.description} onChange={onChange}/>
        <button >send</button>
      </form>
      <div>
        <h3>{postData.data? postData.data.createPost.title : ''}</h3>
        <p>{postData.data? postData.data.createPost.description : ''}</p>
      </div>
      ***
      <ul>
        {state.posts.map( ({id,title,description}) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
        ) )}
      </ul>
      
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
      <div>
        
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
          <Portal/>
        </header>
        
        <Switch>
          
          <Route exact path="/">  
            
            <AppStyle>
              <AsideStyle className={`panel-admin ${this.state.estadoCerrado}?cerrado:`}>
              <FaButtonStyled onClick={this.ejecutarCerrado}>
                {this.state.estadoCerrado && <FaChevronRight/>}
                {!this.state.estadoCerrado && <FaChevronLeft/>}
              </FaButtonStyled>

                <Suspense fallback={<div>loading ..... </div>}>
                  <Form crearEntradaProps={this.crearEntrada} myClass="formulario">
                    <Input id="titulo" name="titulo" label="Titulo" onChange={this.onChange} value={this.state.titulo}/>
                    <Textarea id="contenido" name="contenido" label="Contenido" onChange={this.onChange} value={this.state.contenido}/>
                  </Form>
                </Suspense>
              </AsideStyle>
              <section className="contenido-principal px-12">

              <Lista />
              
              <ul>
                {this.state.entradas.map( (entrada) => (
                  <li key={entrada.id} className="py-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <div className="px-6 py-4">
                        <span className="text-green">{entrada.titulo}</span> | <span className="text-gray">{entrada.contenido}</span>
                      </div>
                    </div>
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
      </div>
    );
  }
}
export default App;
//<!-- p dangerouslySetInnerHTML={{__html: entrada.contenido}}></p -->