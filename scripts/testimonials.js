//AUTO FADE
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-fade .testimonial');
    const container = document.querySelector('.testimonials-fade');
    let current = 0;
    let testimonialInterval;

    function showNext() {
        if (testimonials.length <= 1) return;

        testimonials[current].classList.remove('active');

        current = (current + 1) % testimonials.length;

        testimonials[current].classList.add('active');
    }

    testimonialInterval = setInterval(showNext, 8000);

    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        container.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(showNext, 8000);
        })
    }
});

//FORM
document.addEventListener("DOMContentLoaded", () => {

    const section = document.getElementById("contact-form");
    const buttons = document.querySelectorAll(".mode-btn");
    const submitBtn = document.querySelector(".btn-submit");

    if (section) {
        const title = section.querySelector(".form-title");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {

                const mode = btn.dataset.mode;

                section.dataset.mode = mode;

                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                if (title) {
                    title.textContent =
                        mode === "catalogo"
                            ? "DESCARGÁ EL CATÁLOGO COMPLETO"
                            : "RESERVÁ TU SESIÓN DE COACHING";
                }

                if (submitBtn) {
                    submitBtn.textContent =
                        mode === "catalogo"
                            ? "Enviar y Descargar"
                            : "Solicitar Sesión";
                }
            });
        });
    }

    const coaches = {
        posadas: ["Coach A", "Coach B"],
        sanjuan: ["Coach C"],
        virtual: ["Coach A", "Coach C", "Coach D"]
    };

    const sede = document.getElementById("sede");
    const coach = document.getElementById("coach");

    if (sede && coach) {
        sede.addEventListener("change", () => {

            const lista = coaches[sede.value] || [];

            coach.innerHTML = `<option value="">Elegí un coach</option>`;

            lista.forEach(c => {
                const opt = document.createElement("option");
                opt.textContent = c;
                opt.value = c;
                coach.appendChild(opt);
            });
        });
    }
});

// BACK TO TOP
document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("custom-back-to-top");
    const contactForm = document.getElementById("contact-form");

    window.addEventListener("scroll", () => {
        const passedThreshold = window.scrollY > 400;
        
        let overForm = false;
        if (contactForm) {
            const rect = contactForm.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                overForm = true;
            }
        }

        if (passedThreshold && !overForm) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});