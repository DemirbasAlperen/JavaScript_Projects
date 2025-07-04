const container = document.getElementById("container")

const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARE = 600

for(let i = 0; i < SQUARE; i++){
    const square = document.createElement("div")    // div oluşturuldu
    square.classList.add("square")             // div içine class eklendi

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))

    container.appendChild(square)    // oluşturulan div yapısı container class lı div altına düğüm olarak atandı
}

function setColor(div) {
    // console.log(div);
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor
    div.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}

function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}

function removeColor(div) {      // oluşan renkli karaler css te atanılan transition a göre tekrar eski rengine dönüşecek. 
    // console.log("remove");
    div.style.backgroundColor = "#111"
    div.style.boxShadow = "0 0 2px #000"
}