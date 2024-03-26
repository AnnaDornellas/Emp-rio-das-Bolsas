let btn = document.querySelector('.olho')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    let olho = document.querySelector('#olho')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})