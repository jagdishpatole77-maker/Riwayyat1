document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.prepend(starContainer);

    const starCount = 40; // Fewer stars for shooting effect (less chaotic)

    for (let i = 0; i < starCount; i++) {
        createStar(starContainer);
    }

    function createStar(container) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random properties for shooting stars
        // We need a wider range because of the rotation
        const x = Math.random() * 200 - 50;
        const y = Math.random() * 200 - 50;

        const delay = Math.random() * 3; // Random delay up to 3s
        const duration = Math.random() * 1 + 2; // Fast! 2-3s duration

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
});
