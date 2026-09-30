// NASA HUNCH AI Plant Growth Lab - Interactivity Script

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Login Handling ---
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Redirect to home dashboard
            window.location.href = "home.html";
        });
    }

    // --- 2. Filter Chamber Specimens ---
    const filterBtns = document.querySelectorAll(".filter-btn");
    const plantCards = document.querySelectorAll(".plant-card");

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filter = btn.getAttribute("data-filter");

                plantCards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-status") === filter) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // --- Interactive Diagnostic Modal ---
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");
    const inspectBtns = document.querySelectorAll(".inspect-btn");
    const modalTitle = document.getElementById("modal-title");

    if (modalOverlay && modalClose) {
        // Open modal
        inspectBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const card = e.currentTarget.closest(".plant-card");
                const chamberTitle = card.querySelector(".card-header h3").innerText;
                modalTitle.innerText = `${chamberTitle} - Diagnostic Data`;
                
                modalOverlay.classList.remove("modal-hidden");
            });
        });

        // Close modal via 'X' button
        modalClose.addEventListener("click", (e) => {
            e.preventDefault();
            modalOverlay.classList.add("modal-hidden");
        });

        // Close modal when clicking outside the content card
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.add("modal-hidden");
            }
        });
    }
    // Dynamic Gray Floating Particles
const canvas = document.getElementById("bg-animation");

if (canvas) {
    const ctx = canvas.getContext("2d");

    // Fit canvas to full window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate random gray circles
    const numCircles = 100; // Change circle count here
    const circles = [];

    for (let i = 0; i < numCircles; i++) {
        circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1.5,                 // Circle size (1.5px to 4.5px)
            dx: (Math.random() - 0.5) * 0.6,                 // Random X direction & velocity
            dy: (Math.random() - 0.5) * 0.6,                 // Random Y direction & velocity
            alpha: Math.random() * 0.4 + 0.15,               // Random gray transparency
            grayValue: Math.floor(Math.random() * 80 + 150)  // Variations of light gray (150-230)
        });
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(c => {
            // Update position
            c.x += c.dx;
            c.y += c.dy;

            // Wrap around edges when moving off-screen
            if (c.x < -10) c.x = canvas.width + 10;
            if (c.x > canvas.width + 10) c.x = -10;
            if (c.y < -10) c.y = canvas.height + 10;
            if (c.y > canvas.height + 10) c.y = -10;

            // Render circle
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c.grayValue}, ${c.grayValue}, ${c.grayValue}, ${c.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
});
