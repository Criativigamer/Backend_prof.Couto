import * as service from './auth.service';

export const gerarCadastro = async (request, response) => {
    const htmlFinal = await service.gerarIndex();

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.writeHead(200);
    response.end(htmlFinal);
}

export const processarCadastro = async (request, response) => {
    let corpoReq = '';
    request.on('data', (chunk) => { corpoReq += chunk.toString() });

    const dados = new URLSearchParams(corpoReq);
    if(service.loginCheck(dados) == true){
        const htmlFinal = await service.gerarLogin();

        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.writeHead(200);
        response.end(htmlFinal);
    }
}

export const adicionarNovoCadastro = async (request, response) => {
    let corpoReq = '';
    request.on('data', (chunk) => { corpoReq += chunk.toString() });

    request.on('end', async () => {
    const dadosLista = new URLSearchParams(corpoReq);

    await service.cadastrarNovoUsuario(dadosLista);


    response.writeHead(301, {'location': '/'});
    response.end();
    });
}