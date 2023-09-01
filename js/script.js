function replaceName() {
  let name = prompt("What's is ur name?", "");
  document.getElementById("name").innerHTML = name;
}
document.getElementById('tombol').addEventListener("click", function () {
  replaceName();
})

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Auto-slide every 3 seconds

showImage(currentIndex);




document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman formulir

  // Mengambil nilai dari inputan formulir
  var name = document.getElementById("name").value;
  var tanggalLahir = document.getElementById("tanggalLahir").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var message = document.querySelector('textarea[name="massage"]').value; // Perbaiki "massage" menjadi "message"

  // Menampilkan hasil di sebelah formulir
  document.getElementById("output-nama").textContent = name;
  document.getElementById("output-tanggalLahir").textContent = tanggalLahir;
  document.getElementById("output-gender").textContent = gender;
  document.getElementById("output-message").textContent = message;

  // Mengosongkan formulir
  document.getElementById("contact-form").reset();
});