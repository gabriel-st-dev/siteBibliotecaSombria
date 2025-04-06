const buttonEntrar= document.querySelector("#button")

// colocanod um evento ao clicar no link na navbar
buttonEntrar.addEventListener("click",function(event){
    // impede que o link tente redirecionar
    event.preventDefault() 
    alert("Função em Desenvolvimento")
})


const buttonEnviar= document.querySelector("#buttonEnviar")
const Nome = document.querySelector("#name") 
const email = document.querySelector("#email")
const message = document.querySelector("#message")

buttonEnviar.addEventListener("click", function(event){
    event.preventDefault()
    alert("Pergaminho Enviado")
    Nome.value=""
    email.value=""
    message.value=""
})

