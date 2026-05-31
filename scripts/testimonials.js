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

//COACHING CTA & FORM
document.addEventListener("DOMContentLoaded", () => {

    const section = document.getElementById("contact-form");
    const buttons = document.querySelectorAll(".mode-btn");
    const submitBtn = document.querySelector(".btn-submit");

    if (section) {
        const title = section.querySelector(".form-title");
        const formInputs = section.querySelectorAll("input, select");

        const setFormMode = (mode) => {
            section.dataset.mode = mode;

            buttons.forEach(b => {
                if (b.dataset.mode === mode) {
                    b.classList.add("active");
                } else {
                    b.classList.remove("active");
                }
            });

            if (mode === "none") {
                if (title) title.textContent = "TE AYUDAMOS A DAR EL PRÓXIMO PASO";
                if (submitBtn) {
                    submitBtn.textContent = "Seleccioná una opción arriba";
                    submitBtn.disabled = true;
                }
                formInputs.forEach(input => input.disabled = true);
            } else {
                formInputs.forEach(input => input.disabled = false);
                if (submitBtn) submitBtn.disabled = false;

                if (mode === "coaching") {
                    if (title) title.textContent = "RESERVÁ TU SESIÓN DE COACHING";
                    if (submitBtn) submitBtn.textContent = "Solicitar Sesión";
                } else if (mode === "catalogo") {
                    if (title) title.textContent = "COMPLETÁ TU INSCRIPCIÓN";
                    if (submitBtn) submitBtn.textContent = "Inscribirme ahora";
                }
            }
        };

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                setFormMode(btn.dataset.mode);
            });
        });

        document.querySelectorAll(".coaching-section .btn-primary").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                setFormMode("coaching");
                section.scrollIntoView({ behavior: "smooth" });
            });
        });

        document.querySelectorAll(".btn-apply-degree").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                setFormMode("catalogo");
                section.scrollIntoView({ behavior: "smooth" });
            });
        });
        
        setFormMode("none");
    }

    const coaches = {
        posadas: ["SCOP Patricia Galarza", "SCOP Soledad de la Torre", "COPa Carmen Somariva", "COPa Elio Milocco", "COPa Héctor Chamorro", "COPa Leila Ruiz Díaz"],
        sanjuan: ["SCOP Silvia Galife", "COPa Cecilia Fiorentino", "COPa Fernando Aguiar", "COPa Ingrid Gallardo", "COPa Lorena Gilabert", "COPa Marcelo Martín", "COPa Paola Coria", "COPa Romina Orduña"],
        virtual: ["SCOP Patricia Galarza", "SCOP Soledad de la Torre", "SCOP Silvia Galife", "COPa Carmen Somariva", "COPa Cecilia Fiorentino", "COPa Elio Milocco", "COPa Fernando Aguiar", "COPa Héctor Chamorro", "COPa Ingrid Gallardo", "COPa Leila Ruiz Díaz", "COPa Lorena Gilabert", "COPa Marcelo Martín", "COPa Paola Coria", "COPa Romina Orduña"]
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