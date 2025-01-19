const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);   // Şakaların gelmesi için buton a etkinlik verdik.

generateJoke()

// 1.yol : async kullanımı (yeni yöntem daha anlaşılır ve daha temiz)

async function generateJoke() {

    const config = {
        headers:{
            Accept:"application/json",    
        },
    }

    const res = await fetch("https://icanhazdadjoke.com", config)            // await : işlemlerin sıralı gerçekleşmesini sağlar

    const data = await res.json();     // data ya şakalar yukarıdaki adresten gelecek

    jokeEl.innerHTML = data.joke     // JokeEl de html içerisine gir ve buraya data içerisindeki joke ları ekle anlamına gelir.
}



// 2.yol : then kullanımı (eski yöntem)
// function generateJoke() {

//     const config = {
//         headers:{
//             Accept:"application/json",        // https://icanhazdadjoke.com/api buradan alındı
//         },
//     }

//     fetch("https://icanhazdadjoke.com", config)      // https://icanhazdadjoke.com/api buradan alındı
//         .then((res) => res.json())  // cevapları getirecek
//         .then((data) => {     // data ları getirecek
//             //console.log(data);  //bunu kullanarak programın şaka döndürdüğünü console üzerinden kontrol ettik
//             jokeEl.innerHTML = data.joke      // console da gördüğümüz şaka kısmını html sayfamıza yazdırdık
//         })
// }   