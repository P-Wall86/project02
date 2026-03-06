//ACADEMIC PROGRAMS
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.offer-card');

    const manageOffers = () => {
        headers.forEach(header => {
            const newHeader = header.cloneNode(true);
            header.parentNode.replaceChild(newHeader, header);

            newHeader.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    const info = newHeader.nextElementSibling;
                    const isVisible = window.getComputedStyle(info).display === 'block';

                    document.querySelectorAll('.offer-info').forEach(i => {
                        i.style.display = 'none';
                    });

                    if (!isVisible) {
                        info.style.display = 'block';
                    }
                }
            });
        });
    };

    manageOffers();

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            document.querySelectorAll('.offer-info').forEach(i => {
                i.style.display = 'flex';
            });
        } else {
            document.querySelectorAll('.offer-info').forEach(i => {
                i.style.display = 'none';
            });
        }
    });
});