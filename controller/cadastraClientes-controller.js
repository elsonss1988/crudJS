import { clienteService } from "../service/cliente-service"

const formulário = document.querySelector('[data-form]')

formulario.addEventListener('submit',(event)=>{
   event.preventDefault()

   const nome = event.target.querySelector('[data-nome]').value
   const email = event.target.querySelector('[data-nome]').value

   clienteService.criarCliente(nome, email)
   .then(()=>{
    window.location.href = '../telas/cadastra_cliente.html'
   })
})