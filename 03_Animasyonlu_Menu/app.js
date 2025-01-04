const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {    // open butonuna click yapıldığına container içerisindeki classList içerisine show-nav ı ekleyecek
    container.classList.add("show-nav");   
})

close.addEventListener("click", () => {   // close butonuna click yapıldığına container içerisindeki classList içerisinden show-nav ı silecek
    container.classList.remove("show-nav");
})