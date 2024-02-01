
// Carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Váriaveis
    let desligado = document.getElementById("desligado");
    let ligado = document.getElementById("ligado");

    // Eventos
    desligado.addEventListener("click", modoClaro);
    ligado.addEventListener("click", modoClaro);

    const nav = document.querySelector("nav");
    // Adicionando evento de mouse enter e mouse leave ao botão
    nav.addEventListener("mouseenter", function() {
        const BordaColorida = document.querySelector("#Borda-Colorida");   
        BordaColorida.classList.add("Borda-Colorida");
    })

    nav.addEventListener("mouseleave", function() {
        const BordaColorida = document.querySelector("#Borda-Colorida");   
        BordaColorida.classList.remove("Borda-Colorida");
    })

    // Funções

        // Modo Claro
    function modoClaro() {
        // Sempre que eu quiser pegar o estilo de um elemento de maneira exeterna, utilizo o getComputedStyle(elemento).propriedade
        var ligadoDisplay = getComputedStyle(ligado).display;
        const sectionPrimeiraParte = document.querySelector("section.Primeira-Parte");
        const h1 = document.querySelectorAll("h1");
        const p = document.querySelectorAll("p");
        const console = document.querySelector("#console");
        const consoleMC = document.querySelector("#Console-M-C");
        const nav = document.querySelector("nav");
        const iconesME = document.querySelectorAll(".Icones-Modo-Escuro");
        const iconesMC = document.querySelectorAll(".Icones-Modo-Claro");
        // const botaoHome = document.querySelector(".Botao-Home");
        // const botaoHomeMC = document.querySelector(".Botao-HomeMC");

        if (ligadoDisplay === "none") {
            ligado.style.display = "block";
            desligado.style.display = "none";
            sectionPrimeiraParte.classList.add("fundoClaro");
            console.style.display = "none";
            consoleMC.style.display = "inline-block";
            nav.style.backgroundColor = "#CCCCCA";
            // botaoHome.style.display = "none";
            // botaoHomeMC.style.display = "inline-block";
            iconesME.forEach(elementoIconesME => {
                elementoIconesME.style.display = "none";
            });
            iconesMC.forEach(elementoIconesMC => {
                elementoIconesMC.style.display = "inline-block";
            });
            h1.forEach(elementoh1 => {
                elementoh1.classList.add("Letra-MClaro");
            });
            p.forEach(elementop => {
                elementop.classList.add("Letra-MClaro");
            });
        } else {
            ligado.style.display = "none";
            desligado.style.display = "block";
            sectionPrimeiraParte.classList.remove("fundoClaro");
            console.style.display = "inline-block";
            consoleMC.style.display = "none";
            nav.style.backgroundColor = "#363232";
            // botaoHome.style.display = "inline-block";
            // botaoHomeMC.style.display = "none";
            iconesME.forEach(elementoIconesME => {
                elementoIconesME.style.display = "inline-block";
            });
            iconesMC.forEach(elementoIconesMC => {
                elementoIconesMC.style.display = "none";
            });
            h1.forEach(elementoh1 => {
                elementoh1.classList.remove("Letra-MClaro");
            });
    
            p.forEach(elementop => {
                elementop.classList.remove("Letra-MClaro");
            });
        }
    }


});