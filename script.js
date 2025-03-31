const sorteio = document.querySelector('.button-sortear');
const minInput = document.querySelector('.min');
const maxInput = document.querySelector('.max');
const resultadoDiv =document.querySelector('.resultado');

function verificarInputs() {
    const minVal = minInput.value.trim();
    const maxVal = maxInput.value.trim();

    sorteio.disabled = minVal === "" || maxVal === "";
}

function selecionarTipo(tipo) {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-sorteio").style.display = "block";

    if (tipo === "numeros") {
        document.getElementById("sorteio-numeros").style.display = "block";
        document.getElementById("sorteio-palavras").style.display = "none";
        document.getElementById("titulo-sorteio").innerText = "Adicione os números abaixo para o sorteio";
    } else {
        document.getElementById("sorteio-numeros").style.display = "none";
        document.getElementById("sorteio-palavras").style.display = "block";
        document.getElementById("titulo-sorteio").innerText = "Digite as palavras para o sorteio";
    }

    document.querySelector(".button-sortear").disabled = false;
}

function sortear() {
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    if (document.getElementById("sorteio-numeros").style.display === "block") {
        let min = parseInt(document.querySelector(".min").value);
        let max = parseInt(document.querySelector(".max").value);

        if (!isNaN(min) && !isNaN(max) && min < max) {
            let numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            resultado.innerHTML = `<h2>Resultado: ${numeroSorteado}</h2>`;
        } else {
            resultado.innerHTML = `<h2>Por favor, insira números válidos.</h2>`;
        }
    } else {
        let palavras = document.getElementById("lista-palavras").value.split(",");
        palavras = palavras.map(p => p.trim()).filter(p => p !== "");

        if (palavras.length > 0) {
            let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
            resultado.innerHTML = `<h2>Resultado: ${palavraSorteada}</h2>`;
        } else {
            resultado.innerHTML = `<h2>Por favor, insira pelo menos uma palavra.</h2>`;
        }
    }
}

function voltarTelaInicial() {
    document.getElementById("tela-sorteio").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";
    document.querySelector(".resultado").innerHTML = "";
}

minInput.addEventListener("input",verificarInputs);
maxInput.addEventListener("input",verificarInputs);
sorteio.addEventListener("click", sortear);
