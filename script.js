document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const freeDownloadLink = document.getElementById('free-download-link');
    const paidDownloadLink = document.getElementById('paid-download-link');

    // Load links from localStorage
    const freeLink = localStorage.getItem('freeDownloadLink');
    const paidLink = localStorage.getItem('paidDownloadLink');

    if (freeLink) {
        freeDownloadLink.href = freeLink;
    }
    if (paidLink) {
        paidDownloadLink.href = paidLink;
    }
});
