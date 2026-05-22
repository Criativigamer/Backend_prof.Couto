import fs from 'node:fs/promises';
import * as repository from './auth.repository.js';

export const gerarAuthList = () => {

}

export const authCheck = (novoUsuario) => {
    if(novoUsuario.idade < 16 || novoUsuario.senha.lenght() < 6 || )
    
    return false 
}