// script.js
// Tentukan waktu rilis (jam 12 malam hari ini)
const releaseTime = new Date();
releaseTime.setHours(3, 30, 0, 0); // Set jam 12 malam (22:00:00)

// Ambil elemen countdown
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Fungsi untuk mengupdate countdown
function updateCountdown() {
    const now = new Date(); // Waktu sekarang
    const timeDifference = releaseTime - now; // Selisih waktu dalam milidetik

    // Jika waktu rilis sudah lewat
    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        alert("Cerita si kelinci sudah rilis!");
        window.location.href = "index2.html"; // Redirect ke landing page
        return;
    }

    // Hitung jam, menit, dan detik
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Tampilkan waktu
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Jalankan updateCountdown setiap 1 detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Jalankan sekali di awal untuk menghindari penundaan 1 detik
updateCountdown();
