const counters = document.querySelectorAll(".counter");   // Tüm counter class larına eriştik 

counters.forEach((counter) => {   
    counter.innerText = "0"    // başlangıçta her counter innerText lerine 0 verdik

    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"))   // Html de bulunan data-target attributüne erişim sağladık
        // console.log(typeof target, target);  // burada sayılarımızı ve veri tipini string olarak gördük. Bunları yukarıda number olarak çevirdik 

        const c = +counter.innerText;   // innerText lerin üzerine ekleyecek

        const increment = target / 300    // buradaki 300 sayısını artırarak artış miktarını azaltabilir ve daha yavaş bir artışın gerçekleşmesini sağlarız.

        if (c < target) {   // target > c olduğu sürece artacak
            counter.innerText = `${Math.ceil(c + increment)}`   // artan değerler başlangıç değerine eklenerek gidecek, ceil ise ondalıklı sayıları yuvarlar

            setTimeout(updateCounter, 1);   // 1 saniyede artışın gerçekleşmesini sağladık 
        } else {
            counter.innerText = target    // c > target olursa sayaç target de duracak
        } 
    }

    updateCounter();
})