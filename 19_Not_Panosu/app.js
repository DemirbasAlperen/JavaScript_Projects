const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

// LS de getItem işlemi:
const notes = JSON.parse(localStorage.getItem("notes"));

if(notes) {
    notes.forEach((note) => addNewNote(note))
}

function addNewNote(text = "") {
    const note = document.createElement("div");   // div oluşturuldu
    note.classList.add("note");    // div içine class eklendi

    // div içerisindeyiz ve içerisine index.html de yazdığımız kodu kopyaladık 
    note.innerHTML = `
        <img src="image/pin.png" alt="pin">
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete" alt="delete"><i class="fa-solid fa-eraser"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    // div ${text ? "" : "hidden"} burada text true ise boş getir, false ise hidden ekle anlamına gelir
    // textarea ${text ? "hidden" : ""} bu da yukarıdakinin tersi

    // Delete İşlemi
    const deleteBtn = note.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        note.remove();
    })

    // Edit İşlemi
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    textArea.value = text;   // textArea değerine text ismi verdik
    main.innerHTML = marked(text);  // text i main innerHtml içerisine ekledik. Ayrıca marked() içerisine alarak markdown özelliklerini vermiş olduk

    // textArea bölümüne input olunca yazıları markdown olarak çevirebilecek 
    textArea.addEventListener("input", (e) => {
        const {value} = e.target;   
        main.innerHTML = marked(value);

        updateLS(); // LS fonksiyonunu input içerisinde çağırdık
    })

    document.body.appendChild(note);     // body içerisine çocuk düğüm olarak yukarıda oluşturulan note eklendi. Sayfamızda bulunan yeni not butonuna bastıkça not sayfaları gelecek.
    
} 

// Notları LocalStorage içerisinde tutma işlemi
// setItem işlemi:
function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];   // notes içimli dizi oluşturduk

    notesText.forEach((note) => notes.push(note.value));    // notes(dizi) içerisine note(yazılan notları) push ladık.
    localStorage.setItem("notes", JSON.stringify(notes));   // LS i set ettik. (key,value) = ("notes", JSON.stringify(notes)) = notes değişkeni Json formatında bir string haline getirilir
}

// LocalStorage temizlemek için
document.getElementById("clearStorage").addEventListener("click", function() {
    localStorage.clear(); // Tüm verileri siler
    alert("Local Storage temizlendi!")
})
