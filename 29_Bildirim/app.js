const notifContainer = document.querySelector(".notifContainer")     // burada class veya id için simgelerini başa tanımlamalısın
const button = document.getElementById("button")   // burada id veya class simgeleri kullanılmaz

const notifications = [
    "Instagram Bildirim",
    "Twitter Bildirim",
    "YouTube Bildirim",
    "Medium Bildirim",
    "LinkedIn Bildirim",
    "GitHub Bildirim"
]

const colors = ["red", "purple", "black", "gray", "green", "blue"]


button.addEventListener("click", () => createNotification())

function createNotification(){
    const notif = document.createElement("div")    // div oluşturuldu
    notif.classList.add("notif")    // div içine class eklendi
    notif.classList.add(getRandomColor())

    notif.innerText = getRandomNotif()  // oluşturulacak text için fonksiyon yazdık ve içini aşağıda tanımladık

    notifContainer.appendChild(notif)   // notif i notifContainer altına düğüm olarak ekledik   

    setTimeout(() => {
        notif.remove()
    }, 3000)    // 3000 ms sonra bildirimleri remove yapacak
}

function getRandomNotif() {  // bildirimlerin random olarak gelmesini ayarladık    
    return notifications[Math.floor(Math.random() * notifications.length)]
}

function getRandomColor() {  // renkleri random olarak atadık
    return colors[Math.floor(Math.random() * colors.length)]
}