const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    search.classList.toggle("active");       //toggle: açılıp kapanma işlemini birlikta yapar
    input.focus();  // html form üyesini vurgulamak için focus kulladık
})