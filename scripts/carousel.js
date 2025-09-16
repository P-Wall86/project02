//BULLETS 

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const bullets = document.querySelectorAll('.carousel-bullets .bullet');

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            console.log('click', index);
            slides.forEach(s => s.classList.remove('active'));
            bullets.forEach(b => b.classList.remove('active'));

            slides[index].classList.add('active');
            bullet.classList.add('active');
        });
    });
});

//ACCORDION
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    const contents = document.querySelectorAll('.accordion-content');

    contents.forEach(c => c.style.display = 'none');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c !== content) c.style.display = 'none';
            });

            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        });
    });
});