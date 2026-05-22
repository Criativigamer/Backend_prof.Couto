import fs from 'node:fs/promises';
const CAMINHO_ARQUIVO = './usuarios.json';

export const buscarUsuarios = async () => {
    const listaSenhas = fs.readFile(CAMINHO_ARQUIVO, 'utf-8');
    return JSON.parse(listaSenhas);
}

export const salvarNovoUsuario = async (novoUsuario) => {
    const lista = await buscarUsuarios();
    lista.push(novoUsuario);
    fs.writeFile(CAMINHO_ARQUIVO, JSON.stringify(lista, null, 2));
    return novoUsuario;
}