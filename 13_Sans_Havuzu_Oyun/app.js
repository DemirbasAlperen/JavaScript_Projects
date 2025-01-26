const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus()

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)    // klavyeden basılan tuş değerine eriştik

    if (e.key === "Enter") {
        setTimeout(() => {       // tek seferlik belirli bir süre gerçekleşen
            e.target.value = ""
        },10)   //10ms de gerçekleşecek

        randomSelect()
    }
})

function createTags(input) {     // şimdi burada ne olacağını tanımlayalım
    const tags = input.split(',').filter((tag) => tag.trim() !== "").map((tag) => tag.trim());
    // split; girdiyi bölecek ve diziye çevirerek, filter; yeni bir dizi döndürür, trim; sağ sol boşlukları siler, map; dizi içinden yeni bir dizi döndürür. Her virgül kullandığımızda yazılan diziyi ayıracak  
    // console.log(tags)

    tagsEl.innerHTML = "";   // başlangıçta boş
    tags.forEach((tag) => {   // tags içinde geziniyoruz
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl);
    })  
}

function randomSelect() {
    
    const times = 30;

    const interval = setInterval(() => {
        const ramdomTag = pickRandomTag();
        highlightTag(ramdomTag)

        setTimeout(() => {
            unHighlightTag(ramdomTag)
        },100)
    },100)

    setTimeout(() => {
        clearInterval(interval)   // işlemi durdurmak için

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        },100)
    },times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")

    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("highlight");  // tag class list ine highlight ı ekledik
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}



// Not:
// setTimeout fonksiyonu belirli bir zaman sonra çalıştırmaya yarar.
// setInterval fonksiyonun belirli aralıklar ile sürekli çalışmasını sağlar.
// Math.floor() verilen bir sayıdan küçük veya ona eşit en büyük tam sayıyı döndüren bir JavaScript yöntemidir.
// Math.random() , JavaScript'te, rastgele gibi görünen ancak aslında kesin bir süreçle üretilen bir sayı olan sözde rastgele bir sayı üreten güçlü bir araçtır.