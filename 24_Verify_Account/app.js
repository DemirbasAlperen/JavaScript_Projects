const codes = document.querySelectorAll(".code")

codes[0].focus()

codes.forEach((code,idx) => {
    code.addEventListener("keydown", (e) => {
        if(e.key >=0 && e.key <= 9){
            codes[idx].value = ""     // bir kutu içine birden fazla rakam yazmamızı engeller
            setTimeout(() => codes[idx + 1].focus(), 10)   // bir kutucuğa sayı girilince otomatik olarak diğer kutuya geçecek      
        }else if (e.key === "Backspace"){   // silme tuşuna basınca her kutuda gezerek sayıları silebileceğiz
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})