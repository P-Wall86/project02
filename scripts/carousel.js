document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const bullets = document.querySelectorAll('.carousel-bullets .bullet');

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            if (window.innerWidth >= 768) {
                if (slides[index]) {
                    slides.forEach(s => s.classList.remove('active'));
                    bullets.forEach(b => b.classList.remove('active'));

                    slides[index].classList.add('active');
                    bullet.classList.add('active');
                }
            }
        });
    });

    const accordionHeaders = document.querySelectorAll('.staff-section-mobile .accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                const content = header.nextElementSibling;
                const isVisible = window.getComputedStyle(content).display === 'block';

                document.querySelectorAll('.staff-section-mobile .accordion-content').forEach(c => {
                    c.style.display = 'none';
                });

                content.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            document.querySelectorAll('.staff-section-mobile .accordion-content').forEach(c => {
                c.style.display = '';
            });
        }
    });
});
