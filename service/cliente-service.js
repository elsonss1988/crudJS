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


const removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaCliente = (id,nome,email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    }).then(resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes,
    criarCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

