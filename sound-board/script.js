const sounds = ['applause','boo','gasp','tada','victory',
    'wrong'];


sounds.forEach((sound) => { /*El método forEach() ejecuta la función indicada una vez por cada elemento del array.*/
    const btn = document.createElement ("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs(); /*esto declarado en la funcion de abajo*/
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSongs(){ /*esto permite frenar cada sonido o cancion para cuando presione el siguiente se pare el anterior y se escuche claro y no encima uno del otro*/
 sounds.forEach(sound => {
     const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0; /**/
 });
}