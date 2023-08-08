console.log("Só quem é dev vai descobrir")
let nome = document.querySelector("#nome")

function exibirNome() {
    console.log(nome.value)
    if(nome.value==""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome)

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if (idade.value >=18) {
        alert("Você possui de 18 anos ou mais!")
    }
    else{
        alert("Infelizmente você não é de maior!")
        window.location.href = ""
    }
})

let endereco = document.querySelector("input[Name=end]")
endereco.addEventListener("blur",function(){
    console.log(endereco.value.length)
    if(endereco.value.length >35){
        alert("excede 35 letras")
        endereco.style.border = "2px solid red"
    }
    else{
        alert("seu endereço está ok")
        endereco.style.border ="2px solid yellow"
    }
    
})

let email =  document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")
let minusculo = email.value.to.LowerCase() 


email.addEventListener("keyup", function(){
    confirmar.value = email.value

    if(minusculo.IndexOf("@") == -1  || minusculo.IndexOf(".com") == -1){

    }

    else(){

    }

    consolo.log(email.value.IndexOf("@"))
})

