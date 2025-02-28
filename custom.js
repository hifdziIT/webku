// custom.js

// Fungsi untuk menambahkan animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Animasi untuk card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, background-color 0.3s ease';
        }, index * 200); // Delay animasi untuk setiap card

        // Tambahkan efek hover pada card
        card.addEventListener('mouseenter', function () {
            card.style.transform = 'scale(1.05)'; // Sedikit memperbesar card
            card.style.boxShadow = '0 8px 16px rgba(255, 193, 7, 0.5)'; // Shadow lebih tebal
            card.style.backgroundColor = '#000'; // Ubah warna latar belakang
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = 'scale(1)'; // Kembalikan ke ukuran normal
            card.style.boxShadow = 'none'; // Hilangkan shadow
            card.style.backgroundColor = ''; // Kembalikan warna latar belakang
        });

        // Tambahkan animasi saat card ditekan
        card.addEventListener('mousedown', function () {
            card.style.transform = 'scale(0.95)';
            card.style.transition = 'transform 0.2s ease';
        });
        card.addEventListener('mouseup', function () {
            card.style.transform = 'scale(1.05)'; // Kembalikan ke ukuran hover
            card.style.transition = 'transform 0.2s ease';
        });
    });

    // Animasi untuk carousel caption
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    carouselCaptions.forEach((caption, index) => {
        setTimeout(() => {
            caption.style.opacity = '1';
            caption.style.transform = 'translateY(0)';
        }, index * 300); // Delay animasi untuk setiap caption
    });

    // Validasi formulir pencarian
    const searchForm = document.querySelector('form.d-flex');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            const searchInput = searchForm.querySelector('input[type="search"]');
            if (searchInput.value.trim() === '') {
                event.preventDefault();
                alert('Silakan masukkan kata kunci pencarian.');
            }
        });
    }
});

// Fungsi untuk menambahkan tahun saat ini di footer
function updateFooterYear() {
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `<p>&copy; ${year} TOURGUIDE. All rights reserved.</p>`;
    }
}

// Panggil fungsi updateFooterYear saat halaman dimuat
updateFooterYear();