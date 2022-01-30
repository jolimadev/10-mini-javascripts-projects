const text = 'If you are reading this, is because u r made it another day..💪 i am proud, keep going'

let index = 0;

function writeText() { //declaramos la funcion para escribir el text (function called)
    document.body.innerText = text.slice (0, index);

    index ++;

    if(index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 150);