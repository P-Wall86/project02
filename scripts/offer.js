//ACADEMIC PROGRAMS
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.offer-card');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const info = header.nextElementSibling;

            document.querySelectorAll('.offer-info').forEach(i => {
                if (i !== info) i.style.display = 'none';
            });

            info.style.display = (info.style.display === 'block') ? 'none' : 'block';
        });
    });
});