const imgsContainer = document.getElementById("images");
const img = document.querySelectorAll("#images img")
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


let interval = setInterval(play, 2000);   // resimlerin 2 saniyede bir değişmesi
let idx = 0;
console.log(img);


function play() {
    idx++
    changeImage()
}

function changeImage() {   // 600px in katları şeklinde değişim olacak ki resimler arası geçiş olsun
    if (idx > img.length - 1) {  /*4 resmimiz var fakat index olarak bu 3 görünür, o yüzden -1 yazdık*/ 
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgsContainer.style.transform = `translateX(${-idx * 600}px)`  // css de transform kısmını dinamikleştirdik
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(play, 2000)
}

nextBtn.addEventListener("click", () => {
    idx++

    changeImage()
    resetInterval()  // butonları kullanmak için interval ı resetledik
})

prevBtn.addEventListener("click", () => {
    idx--

    changeImage()
    resetInterval()  
})

