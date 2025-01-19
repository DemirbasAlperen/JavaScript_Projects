// Js birinci kısım

const sounds = ["applause", "boo", "gasp", "tada", "lalala", "wrong"];   // sounds isimli bir dizi oluşturuldu

sounds.forEach((sound) => {   // sounds içerisine girip hepsini gezdik
    const btn = document.createElement('button');    // button elementi oluşturduk
    btn.classList.add("btn");   // oluşturduğumuz buton elementine btn isimli class ekledik

    btn.innerText = sound;    // btn innerText lerine girdik ve soundlarına ulaştık

    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById("buttons").appendChild(btn);   // buttons id sini seçtik ve altına bir düğüm(btn isimli) daha ekledik
})

function stopSongs() {            // Burada seslere arka arkaya tıkladığımızda ilk tıkladığımız duracak ve son tıkladığımız çalmaya başlayacak böylece sesler karışmayacak
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}
