document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
});

function scrollToForm() {
    document.querySelector('.cta-form').scrollIntoView({ behavior: 'smooth' });
}
