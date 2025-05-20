const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")


fill.addEventListener("dragstart", dragStart)
function dragStart(){   // * ilk mouse ile etkinliğin gerçekleştiği an
    // console.log("dragStart")
    this.className += " hold"  // bulunduğumuz class içine hold u ekledik. Başında boşluk olmak zorunda yoksa diğer class a yapışır.
    setTimeout(() => (this.className = "invisible"), 0)   // invisible setTimeout ile gerçekleşmeli yoksa hold u ezer
}

fill.addEventListener("dragend", dragEnd)
function dragEnd(){      // * mouse u bıraktığımız an
    // console.log("dragEnd");
    this.className = "fill"   // bu kısımda class boş olduğu için fill i ekledik ki mouse ile resmi bırakınca tutunsun kaybolmasın
}

for(const empty of empties){
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("drop", dragDrop)
}

function dragOver(e) {  // * mouse ile resim sürükleme işleminin devam ettiği an
    //console.log("dragOver");
    e.preventDefault()
}

function dragEnter(e) {  // * mouse ile resmi bırakacağımız kutunun üzerine geldiğimiz an
    //console.log("dragEnter");
    e.preventDefault()
    this.className += " hover"
}

function dragLeave() {     // * mouse ile resmi bıraktığımız an
    //console.log("dragLeave");
    this.className = "empty"
}

function dragDrop() {   // * resmi bırakınca resmin bıraktığımız kutuda kalması 
    //console.log("dragDrop");
    this.className = "empty"
    this.append(fill) // fill düğümü eklendi
}