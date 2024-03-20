//----------- CADASTRO -----------
var email = document.querySelector("#iemail");
var senha = document.querySelector("#isenha");
var nome = document.querySelector("#inome");

nome.addEventListener("blur", () => {
    valornome = nome.value.trim();
    valornome = nome.value.split(/\s+/);

    if(valornome.length >= 2){
        for(var i=0; i< valornome.length; i++){
            if(valor.value.length < 2){
                alert("Não abrevie seu nome");
            }else{
                alert("Se aparecer eu não enendi")
            }
        }
    }else{
            alert("Por favor digite seu nome completo");
        }
})












function verificaFormulario(){

        event.preventDefault();
    if(nome.value === ""){
        alert("Digite seu nome");
        document.getElementById("erro-nome").style.display = "block";
    }else if(nome.value < 2){
        alert("uma palavra");
    }
}



//----------- LOGIN -----------
emeil_padrao = "admin@gmail.com";
senha_padrao = "admin";

function logar(){
    if(email.value === email_padrao.value){
        alert("email");
        if(senha === senha_padrao){
            alert("senha");
        }
    }
}
