function validaNome() {
    let texto = document.getElementById("nome").value
    let teste = parseInt(texto)
    let warning = document.getElementById("nnome")
    console.log(teste)
    if (texto === "") {
        warning.innerHTML = "Preencha o campo do nome"
        return false
    }
    if (teste > 0 && texto != "") {
        warning.innerHTML = "Apenas letras são permitidas"
        return false
    } else {
        warning.innerHTML = ""
        return true

    }
}

function validaIdade() {
    let idade = document.getElementById("idade").value
    let number = parseInt(idade)
    let warning = document.getElementById("iidade")
    console.log(number)
    if (number > 0 && number <= 120) {
        warning.innerHTML = ""
        return true
    } else {
        warning.innerHTML = "A idade deve ser um número entre 1 e 120"
        return false
    }
}

function validaSenha() {
    let senha = document.getElementById("senha").value
    let confirma = document.getElementById("csenha").value
    let warning = document.getElementById("ssenha")
    console.log(senha, csenha)
    if (senha === "" || confirma === "") {
        warning.innerHTML = "Preencha todos os campos!"
        return false
    }
    if (senha === confirma) {
        warning.innerHTML = ""
        return true
    } else {
        warning.innerHTML = "As senhas não coincidem"
        return false
    }
}

function maiscula() {
    let nome = document.getElementById("nome")
    nome.value = nome.value.toUpperCase()
}

function validar(event) {

    if (validaNome() == true && validaIdade() == true && validaSenha() == true) {
        alert("Envio com sucesso!")
    }
    else {
        event.preventDefault()
        alert("Preencha todos os campos corretamente!")
    }
}