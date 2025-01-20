const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {     // window içerisine etkinlik ekledik. keydown(tuşa basınca) olunca event içerisine tanımladığımız olaylar gerçekleşecek

    insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div> `
})   

// Notlar : 

// ${event.key === " " ? "Space" : event.key}  => eğer space tuşuna basınca " " gelirse yerine "Space" getir anlamına gelir. Çünkü boşluk gelmesini istemedik, onun yerine space yazacak.
// ${event.keyCode}                            => event olursa keyCode u bana getir
// ${event.code}                               => event olursa code u bana getir