function showDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        // Hide other details
        document.querySelectorAll('.details').forEach(detail => {
            detail.style.display = 'none';
        });
        details.style.display = 'block';
    }
}
