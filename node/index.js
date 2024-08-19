import express from 'express';
import cors from 'cors';


import entradaRouter from './router/entrada.js';


const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', entradaRouter);

app.listen(port, () =>{
    console.log(`Aplicação rodando na porta ${port}!`);
})