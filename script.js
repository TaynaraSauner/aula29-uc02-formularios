const formulario = document.getElementById("form")

const btnCadastrar = document.getElementById("btnCadastrar")

const inputNome = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");

const tabelListaPessoas = document.getElementById("listaPessoas")

const listaPessoas = []


//Função que trata o evento onClick do botão cadastrar

function cadastrar(event) {
    event.preventDefault()
    //obtendo os dados do formulário

    const nome = inputNome.value
    const email = inputEmail.value
    const senha = inputSenha.value

    //validação, verificado se os campos tem conteúdo
    if (!nome.trim()) {
        alert("Informe seu nome!")
        inputNome.focus()
        return
    }
    if (!email.trim()) {
        alert("Informe seu e-mail!")
        inputEmail.focus()
        return
    }
    if (!senha.trim()) {
        alert("Informe sua senha!")
        inputSenha.focus()
        return
    }

    //for/each e fazer a comparação 
    let pessoaEncontrada = null

    for (pessoas of listaPessoas) {
        if (pessoa.email === email.toLoWerCase) {
            pessoaEncontrada = pessoa
            break
        }
    }

    // //find
    // pessoaEncontrada = listaPessoas.find((pessoa) => {
    //     if (pessoa.email === email.toLoWerCase)
    // })


    //Caso os dados estejam válidos, procura na lista se já existe um cadastro com o mesmo e-mail,
    //caso exista, mostrar mensagem de erro com alert
    if (pessoaEncontrada) {
        alert('Já existe uma pessoa cadastrada com esse e-mail!')
        return
    }

    //caso não exista , adiciona no array listaPessoas
    listaPessoas.push({
        nome: nome,
        email: email,
        senha: senha
    })

    // e adiciona na tabela html
    const trPessoa = document.createElement("tr")
    const tdNome = document.createElement("td")
    tdNome.textContent = nome
    trPessoa.appendChild(tdNome)


    const trEmail = document.createElement("tr")
    const tdEmail = document.createElement("td")
    tdNome.textContent = nome
    trPessoa.appendChild(tdEmail)


    tabelListaPessoas.appendChild(trPessoa)
}

const cadastrarAnonimo = (event) => {
    console.log(event)
}

btnCadastrar.addEventListener('click', cadastrar)
