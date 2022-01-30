const btn = document.getElementById("btn");
const container = document.getElementById ("container");

btn.addEventListener('click', () => {
    createNotification();  //aca le llamo al id para que me cree la noti al hacer el click(when i click, create notification)

});

function createNotification() {  //aca ya esta la funcion de la noti(function of notification )
        const notif = document.createElement
        ('div');
        notif.classList.add('toast'); //Objeto especial para manejar clases CSS. Contiene métodos y propiedades de ayuda. con esto añadimos la clase toast a la list.(we add the toast class)

        notif.innerHTML = 'Follow me, by the order of Peaky Blinders!'

        container.appendChild(notif);

        setTimeout(() => {
            notif.remove();
        }, 3000); //despues de aparecer el mensaje se remueva en 2 seg(remove the notif after 3sec.)
    } 




    