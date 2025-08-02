const highlightedText = document.querySelectorAll('.highlighted-text');
        highlightedText.forEach(text => {
            text.addEventListener('mouseenter', () => {
                text.classList.add('highlight');
            });
            text.addEventListener('mouseleave', () => {
                text.classList.remove('highlight');
            });
        });