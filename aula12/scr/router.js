import fs from 'node:fs/promises';
import authControler from './modules/auth/auth.controler'

export const roteador = async (request, response) => {
    const {url, method} = request;

    if (url === '/' && method === 'GET'){
        return authControler.gerarCadastro(request, response);
    }
    else if(url === '/adicionar' && method === 'POST'){

    }
}