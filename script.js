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
    if(endereco.value != ""){

            if(endereco.value.length >35){
                alert("excede 35 letras")
                endereco.style.border = "2px solid red"
            }
            else{
                alert("seu endereço está ok")
                endereco.style.border ="2px solid yellow"
            }
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

    btn_olho.classList.contains("fa-eye")
    ?btn_olho.classList.replace("fa-eye","fa-eye-slash", (senha.setAttribute("type","text")))
    :btn_olho.classList.replace("fa-eye-slash","fa-eye", (senha.setAttribute("type","password")))

    // if(btn_olho.classList.contains("fa-eye")){
    //     // console.log("A classe existe")
    //     btn_olho.classList.remove("fa-eye")
    //     btn_olho.classList.add("fa-eye-slash")

    //     senha.setAttribute("type","text")
    // }

    // else{
    //     // console.log("A classe não existe")
    //     btn_olho.classList.remove("fa-eye-slash")
    //     btn_olho.classList.add("fa-eye")

    //     senha.setAttribute("type","password")
    // }
}) 

// pegando dados do campo radio

let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click",(e)=>{
    // console.log(e)
    e.preventDefault() //Esta função irá impedir o comportamento padrão do botão
    // console.log(escolaridade)
    for(let itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é ${itens.value}`) // isto é um template string, outra forma de concatenar.
            // alert("Sua escolaridade é "+itens.value)
            // confirm("Tem certeza?")
        }
    }
})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

escolha.addEventListener("change",()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
    }

    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")
concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        alert("Boa decisão! Felizes ficamos com sua confiança!")
    }

    else{
        alert("É uma ideia só...Ta de sacangem??? Mudando de ideia...")
        let mensagem = prompt("Diga porque você desmarcou")
    }

})

let trabalho = document.querySelector(".form-select")

trabalho.addEventListener("change",()=>{
    // console.log(trabalho.options)
    for(let itens of trabalho){
        if(itens.selected){
            // console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.backgroundColor = "cyan"
            }
            if(itens.value == "Tecnologia"){
                trabalho.style.backgroundColor = "yellow"
            }
            if(itens.value == "Financeiro"){
                trabalho.style.backgroundColor = "red"
            }
        }
    }
})

let cor = document.querySelector("#cor")
cor.addEventListener("change",()=>{
    console.log(cor.value)
    document.body.style.backgroundColor = cor.value
})

let mensagem = document.querySelector("#mensagem")
let restante = document.querySelector("#restante")

let limite = 20

mensagem.addEventListener("keyup", ()=>{
    
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    mensagem.setAttribute("maxlength",limite)

    console.log(restante)

    if(restante.textContent == 20){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red" //tag que pega os papaizes pra pegar os filhos é child
    }

    else{
        mensagem.classList.remove("border-danger")

    }



})