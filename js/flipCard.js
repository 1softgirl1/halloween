
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.flip-inner');
            const isFlipped = inner.style.transform === 'rotateY(180deg)';
            cards.forEach(c => {
                c.querySelector('.flip-inner').style.transform = 'rotateY(0deg)';
            });

            if (!isFlipped) {
                inner.style.transform = 'rotateY(180deg)';
            }
        });
    });
});