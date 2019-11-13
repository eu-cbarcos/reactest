import React from 'react';
import express, { Router } from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from '../src/App';
import {StaticRouter} from 'react-router-dom';
import Loadable from 'react-loadable';

const PORT = 3000;
const app = express();
const router = Router();

router.use(express.static(path.resolve(__dirname,'..','build')));

router.get('/*', (req,res)=>{
  const html = ReactDOMServer.renderToString( 
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  console.log(html);
  const indexFile = path.resolve('__dirname','..','build/index2.html');
  fs.readFile(indexFile,'utf8',(err,data)=>{
    if(err){
      console.log("Ocurrio un error", err);
      return res.status(500).send('Ocurrio error');
    }
    res.send(data.replace('<div id="root"></div>',`<div id="root">${html}</div>`));
  });
});

app.use(router);

Loadable.preloadAll().then(()=>{
  app.listen(PORT, (error)=>{
    if(error){
      return console.log("Ocurrio un error", error);
    }
    console.log(`Escuchando en el puerto: ${PORT}`);
  });
});


