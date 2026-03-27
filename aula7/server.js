import http from "node:http"

const server = http.createServer( (request, response) => {
    const {url, method} = request //faz que ao invés de request.url -> url

    response.setHeader("Content-Type", "text/html; charset=utf-8")

    if(url == "/"){
        response.writeHead(200)
        response.end("<h1>bem vindo a pagina inicial do site!</h1> <p> Tente acessar /aula /projeto ou /admin</p>")
    }else if (url == "/aula"){
        response.writeHead(200)
        response.end("<h1> Bem vindo a pagina aula </h1>")
    }else if (url == "/projeto"){
        response.writeHead(200) // 200 retorna nada no Console
        response.end("<h1> Jogue Project Moon </h1>")
    }else if (url == "/admin"){
        response.writeHead(403) //403 retorna: "Failed to load resource: the server responded with a status of 403 (Forbidden)" no Console
        response.end("<h1> Você não deveria estar aqui </h1>")
    }
})

server.listen(5000, ()=>{
    console.log("Servidor rodando em http://localhost:5000")
})

