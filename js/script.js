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

// Dapatkan referensi ke elemen-elemen yang diperlukan
const kirimButton = document.getElementById("kirim");
const hasilElement = document.getElementById("hasil");

// Tambahkan event listener untuk tombol "Submit"
kirimButton.addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  // Dapatkan nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Tampilkan hasil di elemen hasilElement
  hasilElement.innerHTML = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;
});



