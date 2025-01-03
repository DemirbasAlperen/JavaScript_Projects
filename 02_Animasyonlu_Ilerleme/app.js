// Class ve Id seçimleri
const progress = document.getElementById("progress"); 
const circles = document.querySelectorAll(".circle");  // Tüm circle isimli class ları çağırdık
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {     // () => ; arrow function
    currentActive++;

    if(currentActive > circles.length) {    // next de circle uzunluğu kadar artış olacak
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener("click", () => {    // prev de 1 e kadar azalma olacak
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update(){
    circles.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");

    // console.log((actives.length-1) / (circles.length-1) * 100 + "%")   // sayılar arası boşluğa yüzde olarak erişmek istedik (3 boşluk olduğu için 33.333333% olmalıki kırmızı çizgi de ona göre uzamalı) 
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + "%";  // yukarıdaki consolda gördüğümüz değeri burada style içerisine atadık.

    if (currentActive === 1) {  // sayı 1 e ulaşırsa önceki butonu kendini gizleyecek(disabled)
        prev.disabled = true;
    } else if(currentActive === circles.length){  // sayı 4 e ulaşırsa sonraki butonu kendini gizleyecek
        next.disabled = true;
    }else {  // diğer durumlarda önceki ve sonraki butonu aktif olacak
        prev.disabled = false;
        next.disabled = false;
    }

}