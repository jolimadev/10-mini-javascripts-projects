const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");   /*abre el pop up/open the popup*/
});

close.addEventListener("click", () => {
    container.classList.remove("active");  /*cierra el popup/close the popup*/
});