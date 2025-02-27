// script.js
function validateLogin() {
    const validUsername = "jenderal obama van arkhemis nakhdem irving sahil";
    const validPassword = "26012007";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Yeyy berhasil!");
        window.location.href = "https://for-mycutegirl-aulia.vercel.app/"; // Redirect ke halaman utama
    } else {
        alert("Gitu doang salah hufthh!!");
    }
}