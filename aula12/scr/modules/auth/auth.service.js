import fs from 'node:fs/promises';
import * as repository from './auth.repository.js';

export const gerarIndex = async () => {
    const template = await fs.readFile('./index.html', 'utf-8');

    return template
}

export const gerarLogin = async () => {
    const template = await fs.readFile('./login.html', 'utf-8');

    return template
}

export const loginCheck = async (novoUsuario) => {
    const bancoDeDados = repository.buscarUsuarios();
    const igual = bancoDeDados.some(item => item.email == novoUsuario.email)//true or false

    if(novoUsuario.idade < 16 || novoUsuario.senha.lenght() < 6 || !igual){
        return false
    }
    
    return true
}

export const authCheck = async (novoUsuario) => {
    const bancoDeDados = repository.buscarUsuarios();
    const igual = bancoDeDados.some(item => item.email == novoUsuario.email)//true or false

    if(novoUsuario.idade < 16 || novoUsuario.senha.lenght() < 6 || igual){
        return false
    }
    
    return true
}
export const cadastrarNovoUsuario = async (novoUsuario) => {
    const check = await authCheck(novoUsuario)
    if(check == true){
        const novosDados = {
            email: novoUsuario.get('email'),
            senha: novoUsuario.get('senha'),
            idade: novoUsuario.get('idade')
        };
    }

    await repository.salvarNovoUsuario(novosDados);
}