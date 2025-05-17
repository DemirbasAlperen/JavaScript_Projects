// Canvas API kullanıldı
const canvas = document.getElementById("canvas");  //API
const ctx = canvas.getContext("2d");  //API

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeRange = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");

const eraserBtn = document.getElementById("eraser");   // Silgi
let isEraser = false;  // Başlangıçta silgi aktif değil


let size = 8;
let color = "black";
let isPressed = false;
let x;
let y;

function drawCircle(x, y){    // daire
    ctx.beginPath();  //API
    ctx.arc(x, y, size, 0, Math.PI * 2);  // Outer circle //API
    ctx.fillStyle = color;   // circle içini doldurduk
    ctx.fill();    // doldurma işlemini çağırdık
}

function drawLine(x1, y1, x2, y2){    // çizgi
    ctx.beginPath();    //API
    ctx.moveTo(x1, y1);   //API
    ctx.lineTo(x2, y2);   //API 
    ctx.lineWidth = size * 2 ;      // çizgi kalınlığı
    ctx.strokeStyle = color;    // çizme işlemi
    ctx.stroke();   // çizme işlemini çağırdık
}

canvas.addEventListener("mousedown", (e) => {    // mouse ile bastırdığımızda
    isPressed = true;
    x = e.offsetX;    // offset : o anki konumu(px cinsinden) verir
    y = e.offsetY;
})

canvas.addEventListener("mouseup", (e) => {       // mouse u kaldırdığımızda
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (e) => {       // mouse hareketine göre çizginin oluşması
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;    

        drawCircle(x2, y2);       // x2 ve y2 yi drawCircle içine atadık
        drawLine(x, y, x2, y2);   // x, y, x2, y2 yi drawLine içine atadık

        x = x2
        y = y2
    }
})

increaseBtn.addEventListener("click", () => {
    size += 1;

    if(size > 64){         // en fazla 64 olsun
        size = 64
    }

    updateSizeRange()
})

function updateSizeRange(){        // artış ve azalış miktarını ekrana yansıtmak için 
    sizeRange.innerText = size    // sizeRange içine size ı atadık
}

decreaseBtn.addEventListener("click", () => {
    size -= 1;

    if(size < 1){     // en küçük 1 olsun
        size = 1
    }

    updateSizeRange()
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);     // X butonuna basınca sayfa temizlenir.
})

colorInput.addEventListener("change", (e) => {   // renkleri değiştirebilmek için
    color = e.target.value
})

// Silgi işlemi
eraserBtn.addEventListener("click", () => {
    isEraser = !isEraser;

    const icon = eraserBtn.querySelector("i");

    if (isEraser) {
        color = "white";
        icon.className = "fas fa-pen"; // Fırça ikonu
    } else {
        color = colorInput.value;
        icon.className = "fas fa-eraser"; // Silgi ikonu
    }
});
