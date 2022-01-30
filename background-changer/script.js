const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg(); /*value of cthe random color's, accedemos a tener colores random*/

});

function randomBg() { /*ejecutamos esta funcion para los colores */
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}