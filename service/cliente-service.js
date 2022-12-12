 export const listaClientes = () => {
    //Faz um GET e retorna uma promisse
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}

const criarCliente = (nome,email) =>{
    return  fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            nome,
            email
        })
    }).then(resposta => {
        return resposta.body
    })
}

export const clienteService = {
    listaClientes,
    criarCliente
}

