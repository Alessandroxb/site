let tabela = document.querySelector("#tabela")


// async é uma forma que o JS tem de transformar uma função sincrona em assincrona, muito utilizada en APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url) // fetch irá fazer uma busca na url passada como parâmetro

    const dados = await resultado.json()  // estamos convertendo todos os dados que estão vindo da api no formato json
    console.log(dados)

    for (const item of dados) {
        // console.log(item.email)
        // CRIANDO ELEMENTOS

        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTrabalho = document.createElement("td")
        const tdPhone = document.createElement("td")

        // CRIANDO CONTEÚDO NA COLUNA

        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdTrabalho.textContent = item.company.bs
        tdPhone.textContent = item.phone 


        // ADICIONANDO ELEMENTOS A SUAS TAGS

        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdTrabalho)
        linha.appendChild(tdPhone)

        tabela.appendChild(linha)

    }
}

carregarDados()