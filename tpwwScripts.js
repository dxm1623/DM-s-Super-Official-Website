document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight');
    const highlightBox = document.querySelector('.highlightBox');

    if (!highlightBox) {
        console.error("Highlight box element not found");
    }

    highlights.forEach(area => {
        area.addEventListener('mouseenter', () => {
            const tooltipContent = area.dataset.tooltipContent || "";
            highlightBox.textContent = tooltipContent;
            highlightBox.style.display = 'block';
        });

        area.addEventListener('mouseleave', () => {
            highlightBox.style.display = 'none';
        });

        area.addEventListener('mousemove', (event) => {
            const offset = 10; // offset in pixels
            // Ensure the tooltip is visible to read its dimensions
            highlightBox.style.display = 'block';
            const rect = highlightBox.getBoundingClientRect();
            let left = event.clientX + offset;
            let top = event.clientY + offset;

            // If tooltip overflows the viewport to the right, position it to the left of the mouse
            if (left + rect.width > window.innerWidth) {
                left = event.clientX - offset - rect.width;
            }

            // If tooltip overflows the viewport at the bottom, position it above the mouse
            if (top + rect.height > window.innerHeight) {
                top = event.clientY - offset - rect.height;
            }

            highlightBox.style.left = `${left}px`;
            highlightBox.style.top = `${top}px`;
        });
    });
});