const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");   // class faq olan div içerisine active class ı ekledik
        // parentNode : Öğenin üst düğümünü 
    })
})