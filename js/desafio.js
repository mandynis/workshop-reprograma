console.log("Olá!")

var inputValor = document.querySelector("#valor-hora")
var inputTempo = document.querySelector("#horas-projeto")

function calcularValorProjeto(){
    var valor = inputValor.valueAsNumber
    var tempo = inputTempo.valueAsNumber
    var resposta = document.querySelector("#resposta")

    var valorProjeto = valor * tempo
    
    console.log(valorProjeto)

    resposta.textContent = "R$" + valorProjeto
}

