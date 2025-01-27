const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => nav.classList.toggle("active"))
// toggle a etkinlik ekledik, buton a click olunca nav içerisine active eklenecek ve animasyonlu menü açılacak