// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

//-------------------------------------------------------------------------
// criar uma função para remafaturar o codigo, deixando mais limpo,
// evitando repetir linhas de código
function mostrarPopup(input,label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", ()=>{
    label.classList.add("required-popup")
})

// Ocultar popup de campo obrigatório
    input.addEventListener("blur", ()=>{
    label.classList.remove("required-popup")
})

}
//------------------------------------------------------------------------

//Chamar a função:
mostrarPopup(usernameInput, usernameLabel)


//*************************************************************************** */
//Foi tirado este trecho de código, porque agora está na função "MOSTRARPOPUP"
// Mostrar popup de campo obrigatório
//usernameInput.addEventListener("focus", ()=>{
//    usernameLabel.classList.add("required-popup")
//})

// Ocultar popup de campo obrigatório
//usernameInput.addEventListener("blur", ()=>{
//    usernameLabel.classList.remove("required-popup")
//}) 
//***************************************************************************/


// Validar valor do input
usernameInput.addEventListener("change", (e)=>{
    console.log(e.target.value)
    let valor = e.target.value
    console.log(valor.length)

    if(valor.length < 3){
        // Input não valido  - deve fazer o evento de erro e aparecer a mensagem de ajuda
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.innerText="o username precisa de ter mais de 3 caracteres"
        usernameHelper.classList.add("visible")

    }else{
        // valor valido - deve fazer o evento que está correto
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})


//============================================================================

// ---------- VALIDAÇÃO EMAIL ---------- //

// 1º quais os elementos que irão participar desde evento:

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

console.log(emailInput)  // conferir se estou chamando corretamente no console


//*************************************************************************** */
//Foi tirado este trecho de código, porque agora está na função "MOSTRARPOPUP"
// 2º o que eu quero fazer com esses eventos
// Mostrar popup de campo obrigatório
//    emailInput.addEventListener("focus", ()=>{
//    emailLabel.classList.add("required-popup")
//})

// Ocultar popup de campo obrigatório
//    emailInput.addEventListener("blur", ()=>{
//    emailLabel.classList.remove("required-popup")
//})
//*************************************************************************** */

//Chamar a função:
mostrarPopup(emailInput, emailLabel)

//*************************************************************************** */

// 3º Validar E-mail - necessário verificar se o e-mail tem o @ e ".com"
emailInput.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        // Email válido
        console.log("Email Valido")
        emailInput.classList.remove("error")
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    }else{
        // Email Inválido
        console.log("Email precisa ter um @ e .com");
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.innerText="o email precisa estar correto"
        emailHelper.classList.add("visible")
    }

})