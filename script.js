document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Login Handling ---
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            window.location.href = "home.html";
        });
    }

    // --- 2. Camera View & Timestamp Updates ---
    const camTime = document.getElementById("cam-time");
    if (camTime) {
        setInterval(() => {
            const now = new Date();
            camTime.innerText = "UTC " + now.toUTCString().split(" ")[4];
        }, 1000);
    }

    const snapBtn1 = document.getElementById("snap-btn-1");
    if (snapBtn1) {
        snapBtn1.addEventListener("click", () => {
            alert("Camera Snapshot saved to local Raspberry Pi directory.");
        });
    }

    const snapBtn2 = document.getElementById("snap-btn-2");
    if (snapBtn2) {
        snapBtn2.addEventListener("click", () => {
            alert("Camera Snapshot saved to local Raspberry Pi directory.");
        });
    }

    // --- 3. Dynamic Background Canvas Particles ---
    const canvas = document.getElementById("bg-animation");
    if (canvas) {
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const numCircles = 150;
        const circles = [];

        for (let i = 0; i < numCircles; i++) {
            circles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.35 + 0.1,
                grayValue: Math.floor(Math.random() * 80 + 150)
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(c => {
                c.x += c.dx;
                c.y += c.dy;

                if (c.x < -10) c.x = canvas.width + 10;
                if (c.x > canvas.width + 10) c.x = -10;
                if (c.y < -10) c.y = canvas.height + 10;
                if (c.y > canvas.height + 10) c.y = -10;

                ctx.beginPath();
                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${c.grayValue}, ${c.grayValue}, ${c.grayValue}, ${c.alpha})`;
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // --- 4. Modal Interactions ---
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

    // Filter buttons

    const filterButtons = document.querySelectorAll('.filter-btn');
    const plantCards = document.querySelectorAll('.plant-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Toggle active button styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Get selected filter value
            const targetFilter = button.getAttribute('data-filter');

            // 3. Show or hide cards based on status
            plantCards.forEach(card => {
                const cardStatus = card.getAttribute('data-status');

                if (targetFilter === 'all' || cardStatus === targetFilter) {
                    card.style.display = ''; // Restores default styling (block/flex)
                } else {
                    card.style.display = 'none'; // Hides filtered out cards
                }
            });
        });
    });

});