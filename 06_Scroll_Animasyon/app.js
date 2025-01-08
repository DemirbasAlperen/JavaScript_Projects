const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 6) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;  /* getBoundingClientRect metodu ; öğenin boyutu ve görünüm alanına göre bize bir konum belirler*/ 

        if(boxTop < triggerBottom) {      // triggerBottom boxTop dan büyükse blog box lar ekrana gelecek
            box.classList.add("show");
        }else {
            box.classList.remove("show");
        }
    })
}