// ===============================
// JavaScript Laporan Praktikum
// ===============================

// Animasi saat halaman dibuka
window.addEventListener("load", function () {
    document.body.style.opacity = "1";
});

// Ambil elemen form
const form = document.getElementById("formData");

// Buat popup notifikasi
function showPopup(message, color) {
    const popup = document.createElement("div");

    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "25px";
    popup.style.right = "25px";
    popup.style.padding = "15px 25px";
    popup.style.background = color;
    popup.style.color = "white";
    popup.style.fontSize = "16px";
    popup.style.fontWeight = "bold";
    popup.style.borderRadius = "12px";
    popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.opacity = "0";
    popup.style.transition = "0.4s";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => popup.remove(), 500);
    }, 2500);
}

// Validasi saat submit
form.addEventListener("submit", function(e){

    const nama = form.nama.value.trim();
    const nim = form.nim.value.trim();
    const tanggal = form.tanggal.value;

    // Jika kosong
    if(nama === "" || nim === "" || tanggal === ""){
        e.preventDefault();
        showPopup("⚠ Semua data wajib diisi!", "#e74c3c");
        return;
    }

    // Validasi NIM angka saja
    if(isNaN(nim)){
        e.preventDefault();
        showPopup("⚠ NIM harus berupa angka!", "#e67e22");
        return;
    }

    // Validasi minimal panjang NIM
    if(nim.length < 8){
        e.preventDefault();
        showPopup("⚠ NIM terlalu pendek!", "#f39c12");
        return;
    }

    // Jika berhasil
    showPopup("✓ Data berhasil dikirim!", "#2ecc71");
});

// Efek input focus glow
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("focus", function(){
        this.style.transform = "scale(1.02)";
    });

    input.addEventListener("blur", function(){
        this.style.transform = "scale(1)";
    });
});

// Jam realtime di judul
const subtitle = document.querySelector(".subtitle");

setInterval(() => {
    const now = new Date();
    const jam = now.toLocaleTimeString("id-ID");

    subtitle.innerHTML = "Soal dan Jawaban + Form Data Mahasiswa | " + jam;
},1000);