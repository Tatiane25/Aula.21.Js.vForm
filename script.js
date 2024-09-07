// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// REMOVER CLASSES DO INDEX
//  class="correct" -> linha 15
//  class="error" -> linha 19
//  visible linha -> 20
//  class="required-popup"-> linha 22




function mostrarPopup(input,label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
    })
}

mostrarPopup(usernameInput, usernameLabel)




// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length < 3){
        usernameInput.classList.add("error")
        usernameInput.classList.remove("correct")
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres"
        usernameHelper.classList.add("visible")
    } else {
        usernameInput.classList.add("correct")
        usernameInput.classList.remove("error")
        usernameHelper.classList.remove("visible")
    }
})



// VALIDAÇÃo PARA O EMAIL
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

mostrarPopup(emailInput,emailLabel)

emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes('@') && valor.includes('.com')){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText = "E-mail inválido"
        emailHelper.classList.add("visible")
    }
})
