document.addEventListener('DOMContentLoaded', () => {
    // Navigation Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Single place that opens/closes the drawer, so the icon, drawer and
    // aria-expanded state can never get out of sync.
    function setMenuOpen(isOpen) {
        if (!menuToggle || !navMenu) return;
        menuToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        // Tap outside the drawer, or press Escape, to close it
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                setMenuOpen(false);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        });

        // Reset the drawer if the screen is resized/rotated up to desktop width
        window.matchMedia('(min-width: 851px)').addEventListener('change', (e) => {
            if (e.matches) setMenuOpen(false);
        });
    }

    // Auto-close menu drawer when navigating to anchor sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            setMenuOpen(false);

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