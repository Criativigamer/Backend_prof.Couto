import http from 'node:http';
import fs from 'node:fs/promises0';
import path from 'node:path';

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    if (url == '/' && method == 'GET') {
        try {
            const html = await fs.readFile('index.html', 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(html)
        } catch (err){
            res.writeHead(500)
            res.end('Erro ao carregar o index.html')
        }
    }else{
        try{
            const caminhoArquivo = path.join('./',url)//junta o nome da pasta com sua localização
            const conteudo = fs.readFile(caminhoArquivo)

            const extensão = path.extname(caminhoArquivo)//extrai a extensão do arquivo

            const mapa = {
                '.png': 'image/png',
                '.css': 'text/css',
                '.jpg': 'image/jpeg'
            }//mapa para conectar a extenção a sua respectiva etiqueta

            const tipo = mapa[extensão]

            res.setHeader('Content-Type', tipo)
            res.writeHead(200)
            res.end(conteudo)
        }catch(erro){
            res.writeHead(404)
            res.end('erro')
        }
    }

})

server.listen(3030, console.log('rodando em localhost:3030'))