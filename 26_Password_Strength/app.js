const background = document.getElementById("background");
const passwordLabel = document.getElementById("passwordLabel");
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", (e) => {
    const length = e.target.value.length    // passwordInput a girilecek uzunluğa erişdik
    // console.log(length)
    const bgBlur = 20 - length * 2   // şifremiz 10 haneli olsun diye uzunluğu 2 ile çarptık. Yani herbir karakter 2 ile çarpılır 
    console.log(bgBlur);
    background.style.filter = `blur(${bgBlur}px)`    // css de ki blur kısmını dinamik hale getirdik.

    if(length >= 10){   // şifre uzunluğu 10 karakter ve üzerinde olursa Strong Password yazacak
        passwordLabel.innerText = "Strong Password"
    }
})