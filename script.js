document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#schoolCarousel");

    // Inisialisasi Bootstrap Carousel
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Durasi transisi antar slide (ms)
        ride: "carousel" // Mulai otomatis
    });

    console.log("Carousel berhasil diinisialisasi.");
});

// Fungsi untuk menangani pengiriman formulir
document.getElementById("join-us-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Menampilkan pesan sukses setelah pengiriman formulir
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Menyembunyikan formulir setelah pengiriman
    document.getElementById("join-us-form").reset(); // Mengosongkan input formulir

    // Untuk demonstrasi, kita menunggu 5 detik dan kemudian menyembunyikan pesan sukses
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000); // Pesan akan hilang setelah 5 detik
});

// Fungsi untuk menampilkan detail program saat diklik
function showProgramDetails(programName) {
    // Menampilkan panel detail program
    const detailSection = document.getElementById('program-detail');
    const programNameElement = document.getElementById('program-name');
    programNameElement.innerHTML = "Anda memilih program: " + programName;
    
    // Menampilkan div detail
    detailSection.style.display = 'block';

    // Menambahkan animasi untuk tampilan
    detailSection.classList.add('fade-in');
}

// CSS untuk animasi fade-in
 style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Data alumni tambahan (30 alumni)
const additionalAlumni = [
    { name: 'Arianto Pratama', year: '2020', job: 'Teknisi Jaringan di PT. Indosat' },
    { name: 'Dina Amelia', year: '2019', job: 'Desainer Grafis di Studio Kreatif' },
    { name: 'Budi Santoso', year: '2018', job: 'Akuntan di PT. ABC Finance' },
    { name: 'Cynthia Putri', year: '2017', job: 'Manajer Pemasaran di PT. XYZ' },
    { name: 'Denny Kurniawan', year: '2017', job: 'Web Developer di Digital Agency' },
    { name: 'Erika Sari', year: '2016', job: 'Digital Marketing di PT. ABC' },
    { name: 'Faisal Hidayat', year: '2016', job: 'Graphic Designer Freelance' },
    { name: 'Gina Maria', year: '2015', job: 'Manager HRD di Perusahaan XYZ' },
    { name: 'Hendra Wijaya', year: '2015', job: 'Software Engineer di PT. Teknologi Jaya' },
    { name: 'Ika Putri', year: '2014', job: 'Akuntan di KAP XYZ' },
    { name: 'Joko Susanto', year: '2014', job: 'Project Manager di PT. ABC' },
    { name: 'Karin Novita', year: '2013', job: 'Data Scientist di PT. Digital Tech' },
    { name: 'Lina Nabila', year: '2013', job: 'Sales Executive di Perusahaan XYZ' },
    { name: 'Muhammad Fikri', year: '2012', job: 'Network Administrator di PT. IT Solusi' },
    { name: 'Nina Sari', year: '2012', job: 'Marketing Manager di PT. Marketing Pro' },
    { name: 'Oktavia Pratiwi', year: '2011', job: 'Web Developer di PT. Kreatif Digital' },
    { name: 'Putra Wijaya', year: '2011', job: 'IT Consultant di Perusahaan XYZ' },
    { name: 'Qiana Rizky', year: '2010', job: 'UX/UI Designer di PT. Tech Innovate' },
    { name: 'Rian Prabowo', year: '2010', job: 'Product Manager di PT. Global Digital' },
    { name: 'Siti Aisyah', year: '2009', job: 'HRD Manager di PT. Perkasa' },
    { name: 'Teguh Prasetyo', year: '2009', job: 'Teknisi Jaringan di PT. Jaringan Global' },
    { name: 'Umar Jaya', year: '2008', job: 'Software Engineer di PT. FutureTech' },
    { name: 'Vivi Kurniati', year: '2008', job: 'Event Organizer di PT. Viva Event' }
];

let alumniDisplayed = 3;  // Menampilkan 3 alumni pertama saat halaman dimuat

function loadMoreAlumni() {
    const alumniContainer = document.getElementById('alumni-container');
    const totalAlumni = additionalAlumni.length;

    // Menambahkan alumni yang tersisa
    for (let i = alumniDisplayed; i < totalAlumni; i++) {
        const alumni = additionalAlumni[i];
        const alumniCard = document.createElement('div');
        alumniCard.classList.add('col-md-4', 'mb-4', 'alumni-card');
        alumniCard.innerHTML = `
            <div class="alumni-card-content">
                <h5 class="alumni-name">${alumni.name}</h5>
                <p class="alumni-year">Lulus: ${alumni.year}</p>
                <p class="alumni-job">Pekerjaan: ${alumni.job}</p>
            </div>
        `;
        alumniContainer.appendChild(alumniCard);
    }

    alumniDisplayed += 3; // Menambahkan 3 alumni setiap kali tombol diklik

    // Menyembunyikan tombol jika semua alumni sudah ditampilkan
    if (alumniDisplayed >= totalAlumni) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}
document.getElementById("show-more-btn").addEventListener("click", function() {
    var additionalAlumni = document.getElementById("additional-alumni");
    
    // Menampilkan data alumni tambahan
    additionalAlumni.style.display = "block";
    
    // Menyembunyikan tombol setelah klik
    this.style.display = "none";
});
    document.querySelectorAll('#why-choose-smk .icon-container').forEach((icon) => {
        icon.addEventListener('click', function () {
            // Tambahkan kelas animasi
            icon.classList.add('clicked');

            // Hapus kelas animasi setelah selesai
            setTimeout(() => {
                icon.classList.remove('clicked');
            }, 200); // Sesuaikan durasi dengan efek animasi
        });
    });

