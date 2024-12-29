const panels = document.querySelectorAll(".panel");  // All dememizin sebebi birden fazla panel olması ve hepsini seçtik

panels.forEach( panel => {     // panels içerisinde geziyoruz
    panel.addEventListener("click", () => {   // => : arrow function ES6 ile aramıza katıldı

        removeActive();  
        panel.classList.add("active");
    })
})

function removeActive() {    // Yukarıda bu fonksiyonu tanımlayarak bir active açıldığında diğeri silinecek(kapanacak)
    panels.forEach( panel => {
        panel.classList.remove("active");
    })
}
