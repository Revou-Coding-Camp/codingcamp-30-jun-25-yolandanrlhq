function submitName() {
    const name = document.getElementById('nameInput').value.trim();
    if (name !== "") {
      document.getElementById('welcomeText').textContent = `Selamat datang, ${name}!`;
      document.getElementById('popup').classList.add('hidden');
    } else {
      alert("Silakan isi nama terlebih dahulu.");
    }
  }

let currentSlide = 0;
    const carousel = document.getElementById('carousel');
    const totalSlides = carousel.children.length;

    function updateSlide() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
  }

function tampilkanHasil(e) {
    e.preventDefault();

    // Ambil data
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    // Format waktu sekarang
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Jakarta',
    });
    const waktu = formatter.format(now) + ' WIB';

    // Tampilkan hasil
    document.getElementById('waktu').textContent = waktu;
    document.getElementById('hasil-nama').textContent = nama;
    document.getElementById('hasil-email').textContent = email;
    document.getElementById('hasil-pesan').textContent = pesan;

    // Opsional: reset form
    // e.target.reset();
  }