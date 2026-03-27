import http from "node:http" //importa o modulo HTTP (HiperText Transference Protocol)

const server = http.createServer((request,response) =>{
    console.log(`Requesição recebida: ${request.method} para: ${request.url}`)

    response.setHeader('Content-Type', "text/html; charset=utf-8") //utf-8 é compativel com acento

    response.writeHead(200) // 200 = deu certo

    response.write("<hi>Olá Mundo</h1>")
    response.write("<p> Teste servidor node.js</p>")

    response.end() //finaliza a resposta(response) e envia como html pro client
})

server.listen(5000, () => {
    console.log(`Servidor rodando em http://localhost:5000`)
})