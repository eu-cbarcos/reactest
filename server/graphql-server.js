import typeDefs from './db/schema';
import resolvers from './db/resolvers';
import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import db from './db/models/index';

const PORT = 3001;
const app = express();

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: () => {
    return {db}
  }
});
server.applyMiddleware({ app });

app.listen(PORT, (error)=>{
  if(error){
    return console.log("Ocurrio un error", error);
  }
  console.log(`Escuchando en el puerto: ${PORT} ${server.graphqlPath}`);
});
