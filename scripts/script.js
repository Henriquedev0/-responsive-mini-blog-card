
let card = document.querySelector('.card');

card.addEventListener('mouseover', function() {
    card.style.transform = 'scale(1.05)';
});

card.addEventListener('mouseout', function() {
    card.style.transform = 'scale(1)';
});