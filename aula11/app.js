import http from 'node:http';
import { roteador } from './src/router.js';

const port = 3000;

// O servidor agora não sabe o que o sistema faz.
// Ele apenas entrega todas as requisições para o roteador.
const server = http.createServer(roteador);

server.listen(port, () => console.log('Servidor modularizado rodando na porta ' + port));