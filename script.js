let regexNome=/^[A-Za-z\s]{1,100}$/
let regexEmail=/^[^@]+@[^@]+\.[^@]+$/
let regexTelefone=/^\({1}[0-9]{2}\){1}[0-9]{4,5}-{1}[0-9]{4}$/

document.addEventListener("DOMContentLoaded", function(){
  let botao=document.getElementById('botao');
  botao.addEventListener("click", function(){
    let nome=document.getElementById('nome').value;
    let email=document.getElementById('email').value;
    let telefone=document.getElementById('telefone').value;
    validarNome=regexNome.test(nome);
    validarEmail=regexEmail.test(email);
    validarTelefone=regexTelefone.test(telefone);
    
    if(!validarNome){
        alert("Nome Invalido!");
    }
    if(!validarEmail){
        alert("Email Invalido!");
    }
    if(!validarTelefone){
        alert("Telefone Invalido!")
    }
  });
});
