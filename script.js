document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Live Telemetry Simulation (Slight fluctuations to simulate real-time sensors)
    const moistureChamber1 = document.getElementById('moisture-1');
    const moistureChamber3 = document.getElementById('moisture-3');

    if (moistureChamber1 && moistureChamber3) {
        setInterval(() => {
            const val1 = 67 + Math.floor(Math.random() * 3);
            const val3 = 71 + Math.floor(Math.random() * 3);
            
            moistureChamber1.textContent = `${val1}%`;
            moistureChamber3.textContent = `${val3}%`;
        }, 4000);
    }

    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");
    const inspectBtns = document.querySelectorAll(".inspect-btn");

    if (modalOverlay && modalClose) {
        inspectBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                modalOverlay.classList.remove("modal-hidden");
            });
        });

        modalClose.addEventListener("click", () => {
            modalOverlay.classList.add("modal-hidden");
        });

        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.add("modal-hidden");
            }
        });
    }

});