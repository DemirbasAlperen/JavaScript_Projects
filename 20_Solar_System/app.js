// Yıldızların görünümü için yazılan fonksiyon

function createStars(){     // createStars isimli fonksiyon oluşturuldu
    const container = document.querySelector("body");    // querySelector ile body seçildi
    
    for(let i=0; i < 1000; i++) {      // Bu döngü 1000 kez çalışır. Her bir adımda bir tane yıldız (div) oluşturur.
        const star = document.createElement("div");     // Her döngüde bir div elementi oluşturulur ve buna "star" sınıfı (CSS’te stil verebilmek için) atanır.
        star.className = "star";  

        star.style.width = ".1px";          // Yıldızlar çok küçük olacak şekilde boyutlandırılıyor — sadece 0.1 piksel. 
        star.style.height = ".1px";

        star.style.top = Math.random() * 100 + "%";        // Yıldızlar sayfada rastgele bir konuma yerleştirilir. % değerleri sayesinde, sayfanın herhangi bir yerinde olabilirler (0%–100% arası yatay ve dikey konumlar).
        star.style.left = Math.random() * 100 + "%";

        container.appendChild(star);      // Oluşturulan yıldız (div) body içine ekleniyor.
    }
}

createStars();