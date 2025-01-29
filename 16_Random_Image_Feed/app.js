const container = document.querySelector(".container");
const unsplashURL = "https://picsum.photos/200/300?random=1";
const rows = 9;   // 9 adet görsel alacağız

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img"); //img elementini oluşturduk
  img.src = `${unsplashURL}${getRandomSize()}`; // img yoluna yukarıdaki adresi bağladık
  container.appendChild(img); // container altına bir düğüm ekledik
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300; // 300 boyutundaki görselleri istiyoruz
}
// Math.random() : 0 ile 1 arasında değer döndürür biz 1 ile 10 arasıda değer istediğimizden yukarıda 10 ile çarptık

function getRandomSize() {
  // resim boyutlarını ayarladık
  return `${getRandomNumber()}x${getRandomNumber()}`;
}
