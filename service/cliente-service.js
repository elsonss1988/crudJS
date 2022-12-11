const criarNovaLinha = (nome, email) =>{
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `             
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td> 
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        // tabela.appendChild(criarNovaLinha(nome,email))

    //Abrir uma requisão
    const http = new XMLHttpRequest();

    //Faz o fetch como GET para a URL abaixo
    http.open('GET', 'http://localhost:3000/profile');


    //Envia a requisição
    http.send()

    //Quando a requisição for carregada, ele vai pegar o response e jogar na variável data
    http.onload = () => {

        if (http.status >= 400) {
            reject(JSON.parse(http.response))
        }else{
            resolve(JSON.parse(http.response))
        }
            
     
    }
    })
    console.log(promise)
    return promise
}

listaClientes()
.then(data => data.forEach(element => {
        tabela.appendChild(
            criarNovaLinha(element.nome, element.email)
        )
    }) )


// const data = JSON.parse(http.response)
// data.forEach(element => {
//     tabela.appendChild(criarNovaLinha(element.nome, element.email))
// })
// console.log(data)