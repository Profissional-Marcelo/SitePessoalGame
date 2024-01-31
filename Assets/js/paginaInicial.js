
// Carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Váriaveis
    desligado = document.getElementById("desligado");
    ligado = document.getElementById("ligado");

    // Eventos
    desligado.addEventListener("click", modoClaro);
    ligado.addEventListener("click", modoClaro);

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

        if (ligadoDisplay === "none") {
            ligado.style.display = "block";
            desligado.style.display = "none";
            sectionPrimeiraParte.classList.add("fundoClaro");
            console.style.display = "none";
            consoleMC.style.display = "inline-block";
            
            nav.style.backgroundColor = "#CCCCCA";
            
            h1.forEach(element => {
                element.classList.add("Letra-MClaro");
            });
            p.forEach(element => {
                element.classList.add("Letra-MClaro");
            });
        } else {
            ligado.style.display = "none";
            desligado.style.display = "block";
            sectionPrimeiraParte.classList.remove("fundoClaro");
            console.style.display = "inline-block";
            consoleMC.style.display = "none";
            h1.forEach(element => {
                element.classList.remove("Letra-MClaro");
            });
    
            p.forEach(element => {
                element.classList.remove("Letra-MClaro");
            });
        }
    }


});