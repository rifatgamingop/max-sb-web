document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('admin-form');
    const freeLinkInput = document.getElementById('free-link');
    const paidLinkInput = document.getElementById('paid-link');
    const statusMessage = document.getElementById('status-message');

    // Load existing links from localStorage
    freeLinkInput.value = localStorage.getItem('freeDownloadLink') || '';
    paidLinkInput.value = localStorage.getItem('paidDownloadLink') || '';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const freeLink = freeLinkInput.value;
        const paidLink = paidLinkInput.value;

        // Save links to localStorage
        localStorage.setItem('freeDownloadLink', freeLink);
        localStorage.setItem('paidDownloadLink', paidLink);

        statusMessage.textContent = "Links updated successfully!";
        statusMessage.style.color = "green";

        // Notify user on the same window if the download page is open in another tab
        if (window.opener && !window.opener.closed) {
            window.opener.updateDownloadLinks(freeLink, paidLink);
        }
    });
});

function updateDownloadLinks(freeLink, paidLink) {
    const freeDownloadLink = document.getElementById('free-download-link');
    const paidDownloadLink = document.getElementById('paid-download-link');

    if (freeDownloadLink) {
        freeDownloadLink.href = freeLink;
    }
    if (paidDownloadLink) {
        paidDownloadLink.href = paidLink;
    }
}
