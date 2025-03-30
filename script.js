const sorteio = document.querySelector('.button-sortear');
const minInput =document.querySelector('.min');
const maxInput =document.querySelector('.max');
const resultadoDiv =document.querySelector('.resultado');

function verificarInputs() {
    const minVal = minInput.value.trim();
    const maxVal = maxInput.value.trim();

    sorteio.disabled = minVal === "" || maxVal === "";
}

function sortear() {
    const min = Math.ceil(Number(minInput.value));
    const max = Math.floor(maxInput.value);

    if (min >= max) {
    alert('O número inicial deve ser maior que o número final!');
    return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const mensagem = `<p> Só vive o extraordinario quem acredita no propósito: O número sorteado foi <strong>${result}</strong> ! </p>`
    resultadoDiv.innerHTML = mensagem;

    minInput.value = "";
    maxInput.value = "";
    sorteio.disabled = true;
}

minInput.addEventListener("input",verificarInputs);
maxInput.addEventListener("input",verificarInputs);
sorteio.addEventListener("click", sortear);