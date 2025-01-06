const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;   // loading yüzdesini 0 dan başlattık

let border = setInterval(bluring, 30);  // belirli bir fonksiyonu belirli bir süre içinde tekrarlaması için verilen süredir (buradaki 30 ms demektir)

function bluring() {
    load++    // her seferinde load bir artsın

    if(load > 99) { 
        clearInterval(border);   // işlemi durdur anlamına gelir
    }

    loadText.innerText = `${load}%`   // text içerisine girdik
    loadText.style.opacity = scale(load, 0, 100, 1, 0)   // rakam için; yüzde 0 dan 100 e kadar giderken opacity de 1 den 0 a gidecek
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`    // css tarafında atadığımız blur işlemi değişecek yani rakam arttıkça blur luk 30 dan 0 a düşecek 
}


// stack overflow dan hazır olarak aldık. Yukarıda style işlemi tanımladığımız sınıflarda gerçekleşecek olan matematiksel işlemi bu kısım yapacak
function scale(number, inMin, inMax, outMin, outMax) {           
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }