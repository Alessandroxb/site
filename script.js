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


email.addEventListener("keyup", function(){
    confirmar.value = email.value
    
    let minusculo = email.value.toLowerCase() 

    if(minusculo.indexOf("@") == -1  || minusculo.indexOf(".com") == -1){
        
        console.log("Email inválido")
        // email.style.border = "2px solid red" 
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }

    else{
        console.log("Email válido")
        // email.style.border = "2px solid green"
        email.classList.add("border-success")
        email.classList.remove("border-danger")

    }

    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        // console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type","text")
    }

    else{
        // console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type","password")
    }
}) 

// pegando dados do campo radio

let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click",(e)=>{
    console.log(e)
    e.preventDefault() //Esta função irá impedir o comportamento padrão do botão
    console.log(escolaridade)
})

