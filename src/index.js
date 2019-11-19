import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import ThemeContext from './themeContext';
import {BrowserRouter} from "react-router-dom"
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks'
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from 'apollo-link-error';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink, split} from 'apollo-link';


const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql',
});
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3001/graphql',
  options: {
    reconnect: true
  }
});
const link = split(({query})=>{
  const definition = getMainDefinition(query);
  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
},wsLink,httpLink);
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError})=>{
      console.log('Error');
    }),
    link
  ]),
  cache: new InMemoryCache()
  //uri: 'http://localhost:3001/graphql',
});



/*const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});*/
ReactDOM.hydrate( // ya no es render, sino hydratar... rehidratamos
  <ApolloProvider client={client}>
    <BrowserRouter><App /></BrowserRouter>
  </ApolloProvider>
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
