document.addEventListener("DOMContentLoaded", function() {
    const telaInicial = document.getElementById("tela-inicial");
    const telaSorteio = document.getElementById("tela-sorteio");
    const sorteioNumeros = document.getElementById("sorteio-numeros");
    const sorteioPalavras = document.getElementById("sorteio-palavras");
    const btnSortear = document.getElementById("btn-sortear");
    const resultadoDiv = document.getElementById("resultado");
    const listaPalavras = document.getElementById("lista-palavras");
    
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
    
    window.voltarTelaInicial = function() {
        telaSorteio.style.display = "none";
        telaInicial.style.display = "block";
        resultadoDiv.innerHTML = "";
    };
    
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
    
    document.getElementById("min").addEventListener("input", validarInputs);
    document.getElementById("max").addEventListener("input", validarInputs);
    listaPalavras.addEventListener("input", validarInputs);
    
    function dispararConfetes() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#d7ff24', '#ffffff', '#8c0de7']
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 60,
                origin: { y: 0.5 },
                colors: ['#d7ff24', '#8c0de7']
            });
        }, 300);
    }
    
    window.sortear = function() {
        dispararConfetes();
        
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
        
        setTimeout(dispararConfetes, 500);
    };
});