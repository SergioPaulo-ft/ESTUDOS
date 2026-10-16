const esconder = document.getElementById('esconder');
const menu = document.getElementById('menu-adm');

let menuVisivel = false; // Estado do menu

esconder.addEventListener('click', () => {
    if (menuVisivel) {
        menu.style.marginLeft = "-280px"; // Esconde o menu
        menu.style.transition = "0.2s"
        } else {
        menu.style.marginLeft = "0px"; // Mostra o menu
        menu.style.transition = "0.2s"
    }
    menuVisivel = !menuVisivel; // Alterna o estado
});

