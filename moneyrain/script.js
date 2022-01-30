function createMoney () {
    const money = document.createElement
    ('div');
    money.classList.add('money');
    
    money.style.left = Math.random() * 100 + "vw";

    money.style.animationDuration = Math.random() * 2 + 3 + "5";

    money.innerText = '💸'; 

    document.body.appendChild(money); /*appendChild() devuelve un elemento hijo:*/
   
    setTimeout(() => {
        money.remove();
    }, 5000);  /*para q no se acumulen arriba los emojis los elimine desp de 5 segundos*/
}
setInterval(createMoney, 300);