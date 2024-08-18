document.addEventListener("DOMContentLoaded", function() {
    // Variáveis
    const desligado = document.getElementById("desligado");
    const ligado = document.getElementById("ligado");
    const nav = document.querySelector("nav");
    const sectionPrimeiraParte = document.querySelector("section.Primeira-Parte");
    const h1 = document.querySelectorAll("h1");
    const p = document.querySelectorAll("p");
    const console = document.querySelector("#console");
    const consoleMC = document.querySelector("#Console-M-C");
    const iconesME = document.querySelectorAll(".Icones-Modo-Escuro");
    const iconesMC = document.querySelectorAll(".Icones-Modo-Claro");
    
    // Função para alternar classes de bordas coloridas
    function alternarBordaColorida(elemento, classe) {
        elemento.addEventListener("mouseenter", () => classe.classList.add("Borda-Colorida"));
        elemento.addEventListener("mouseleave", () => classe.classList.remove("Borda-Colorida"));
    }

    // Eventos de bordas
    const bordas = [
        { trigger: ".borda1", target: ".border-color" },
        { trigger: ".borda2", target: ".border-color2" },
        { trigger: ".borda3", target: ".border-color3" },
        { trigger: ".borda4", target: ".border-color4" },
        { trigger: ".borda5", target: ".border-color5" },
    ];

    bordas.forEach(({ trigger, target }) => {
        const triggerElement = document.querySelector(trigger);
        const targetElement = document.querySelector(target);
        alternarBordaColorida(triggerElement, targetElement);
    });

    // Evento na navbar
    alternarBordaColorida(nav, nav);

    // Função para alternar o modo claro/escuro
    function modoClaro() {
        const isLigado = getComputedStyle(ligado).display === "none";
        
        ligado.style.display = isLigado ? "block" : "none";
        desligado.style.display = isLigado ? "none" : "block";
        sectionPrimeiraParte.classList.toggle("fundoClaro", isLigado);
        console.style.display = isLigado ? "none" : "inline-block";
        consoleMC.style.display = isLigado ? "inline-block" : "none";
        nav.style.backgroundColor = isLigado ? "#CCCCCA" : "#363232";
        
        iconesME.forEach(icon => icon.style.display = isLigado ? "none" : "inline-block");
        iconesMC.forEach(icon => icon.style.display = isLigado ? "inline-block" : "none");

        h1.forEach(element => element.classList.toggle("Letra-MClaro", isLigado));
        p.forEach(element => element.classList.toggle("Letra-MClaro", isLigado));
    }

    // Eventos dos botões
    desligado.addEventListener("click", modoClaro);
    ligado.addEventListener("click", modoClaro);
});
