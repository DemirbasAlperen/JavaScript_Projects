const content = document.getElementById("content");
const speedEl = document.getElementById("speed");
const text = "I am a Mechatronic Engineering and Full Stack Developer";
let idx = 1;  // yukarıda yazdığımız I harfinden başlaması için 1 verdik
let speed = 300 / speedEl.value;   // burada harf hızlarının atadığımız speed değerine bağlı olmasını sağladık. Doğrudan da 200ms yazarak hızını ayarlayabilirdik.

writeText()  // dikkat! function u çağırmazsak işlem gerçekleşmez. 

function writeText(){
    content.innerText = text.slice(0, idx);
    idx++;

    if(idx > text.length) {    // Eğer yazıda sürekli döngü olmasını istemiyorsak if kısmını silebiliriz. Yada döngü içine content.innerText = text yazabiliriz.
        idx = 1                // text de döngü olması için buraya idx=1 yazdık.
    }

    setTimeout(writeText, speed)  // speed değeri kadar bekleyip harf ekleyecek
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));  // burada hız değerini dinamik hale getirdik.