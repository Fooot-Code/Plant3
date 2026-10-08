document.addEventListener('DOMContentLoaded', () => {
    // Navigation Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Toggle menu state
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Auto-close menu drawer when navigating to anchor sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }

            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    // Simulated Sensor Fluctuations
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

    // Modal Overlay Controls
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