// PATH FIX (penting!)
const images = [
  '../asset/login1.jpg',
  '../asset/login2.jpg',
  '../asset/login3.jpg',
  '../asset/gallery1.png'
];

let currentImageIndex = 0;

function changeImage() {
  const rightDiv = document.querySelector('.right');

  if (!rightDiv) {
    console.log("DIV .right tidak ditemukan!");
    return;
  }

  rightDiv.style.backgroundImage = `url('${images[currentImageIndex]}')`;

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Jalankan saat load
window.onload = function () {
  changeImage();
  setInterval(changeImage, 3000);
};

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    alert("Login berhasil!");
  } else {
    alert("Salah!");
  }
});