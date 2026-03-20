/*
const item = {nome:"poção", quantidade: 5, cura: 10}

const item_texto = JSON.stringify(item) //transforma em texto para salvar em um arquivo

console.log(item_texto)
//console.log(item)

const item_carregado = JSON.parse(item_texto) //transforma o texto de volta em item

console.log(item_carregado)
*/
/*
import fs from 'fs/promises' //importa fs(async) do javascript

//await fs.writeFile("teste.txt", "hello word!\naaaaaaaaaaaaaaaaaaaa") //writeFile(x,y) escreve um arquivo com nome x, e texto y (\n pula linha)

const conteudo = await fs.readFile("teste.txt", 'utf-8') //utf-8 =>codificação padrao de arquivos de texto
//readFile(x,y) imprime o conteudo do aquivo x, que tem a codificação y
console.log(conteudo)
*/
/*
import fs from 'fs/promises'
const item = {nome:"poção", quantidade: 4, cura: 10}

const item_texto = JSON.stringify(item)

await fs.writeFile("pocao.json", item_texto)
*/
import fs from 'fs/promises'
const caminho = 'inventario.json' // JSON-> Javascript Object Notation

async function lerBanco(){
    try{
        const dados = await fs.readFile(caminho, 'utf-8')
        return JSON.parse(dados)
    }catch(erro){
        return [] //caso de erro vai retornar uma list vazia
    }
}

async function salvarBanco(lista){
    const texto = JSON.stringify(lista, null, 4)//null e 4 são formatação da lista
    await fs.writeFile(caminho, texto) //se o arquivo tiver o nome de um previamente existente, salva por cima do arquivo
}

async function adicionarItem(nome, qtd, efeito){
    const inventario = await lerBanco() //se não tiver lista o erro retorna uma vazia

    const novoItem = {
        nome,
        qtd,
        efeito
    }

    inventario.push(novoItem) //coloca os itens apos o ultimo vetor, como uma fila
    await salvarBanco(inventario)
}

async function listarItens(){
    const inventario = await lerBanco()

    if (inventario.lenght == 0){
        console.log("Inventario vazio")
    }else{
        console.table(inventario)//console.table imprime uma lista como uma tabela
        for(let i=0; i<inventario.length; i++){
            console.log(inventario[i])
        }
    }
}

async function teste(){
    console.log("Testando as funções do banco de de dados")
    await adicionarItem("Poção", 5, "Levitação")
    await adicionarItem("Espada", 1, "Aspecto Flamejante")

    console.log("Exibindo o Inventário")

    await listarItens()
}

teste()