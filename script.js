document.addEventListener("DOMContentLoaded", function() {
    // Elementos da DOM
    const telaInicial = document.getElementById("tela-inicial");
    const telaSorteio = document.getElementById("tela-sorteio");
    const sorteioNumeros = document.getElementById("sorteio-numeros");
    const sorteioPalavras = document.getElementById("sorteio-palavras");
    const btnSortear = document.getElementById("btn-sortear");
    const resultadoDiv = document.getElementById("resultado");
    const listaPalavras = document.getElementById("lista-palavras");
    
    // Função para selecionar o tipo de sorteio
    window.selecionarTipo = function(tipo) {
        telaInicial.style.display = "none";
        telaSorteio.style.display = "block";
        
        if (tipo === "numeros") {
            sorteioNumeros.style.display = "block";
            sorteioPalavras.style.display = "none";
            document.getElementById("titulo-sorteio").textContent = "Sorteio de Números";
        } else {
            sorteioNumeros.style.display = "none";
            sorteioPalavras.style.display = "block";
            document.getElementById("titulo-sorteio").textContent = "Sorteio de Palavras";
        }
    };
    
    // Função para voltar à tela inicial
    window.voltarTelaInicial = function() {
        telaSorteio.style.display = "none";
        telaInicial.style.display = "block";
        resultadoDiv.innerHTML = "";
    };
    
    // Validação dos inputs
    function validarInputs() {
        if (sorteioNumeros.style.display === "block") {
            const min = parseInt(document.getElementById("min").value);
            const max = parseInt(document.getElementById("max").value);
            btnSortear.disabled = isNaN(min) || isNaN(max) || min >= max;
        } else {
            const palavras = listaPalavras.value.split(",").filter(p => p.trim() !== "");
            btnSortear.disabled = palavras.length < 1;
        }
    }
    
    // Event listeners para validação
    document.getElementById("min").addEventListener("input", validarInputs);
    document.getElementById("max").addEventListener("input", validarInputs);
    listaPalavras.addEventListener("input", validarInputs);
    
    // Função principal de sorteio
    window.sortear = function() {
        resultadoDiv.innerHTML = "";
        
        if (sorteioNumeros.style.display === "block") {
            const min = parseInt(document.getElementById("min").value);
            const max = parseInt(document.getElementById("max").value);
            const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
            resultadoDiv.innerHTML = `<p>Número sorteado: <strong>${resultado}</strong></p>`;
        } else {
            const palavras = listaPalavras.value.split(",")
                          .map(p => p.trim())
                          .filter(p => p !== "");
            const sorteada = palavras[Math.floor(Math.random() * palavras.length)];
            resultadoDiv.innerHTML = `<p>Palavra sorteada: <strong>${sorteada}</strong></p>`;
        }
    };
});