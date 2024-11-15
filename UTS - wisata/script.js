// Script untuk menampilkan bagian yang sesuai saat menu diklik
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Set bagian Home sebagai tampilan default
window.onload = function() {
    showSection('home');
};

// Script untuk mengirim form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim.");
    document.getElementById('contactForm').reset();
});
