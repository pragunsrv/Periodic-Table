document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        alert(`Element: ${element.dataset.name}\nSymbol: ${element.dataset.symbol}\nAtomic Number: ${element.dataset.atomic}`);
    });
});
document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        const info = document.getElementById('element-info');
        info.innerHTML = `<strong>Element:</strong> ${element.dataset.name}<br>
                           <strong>Symbol:</strong> ${element.dataset.symbol}<br>
                           <strong>Atomic Number:</strong> ${element.dataset.atomic}<br>
                           <strong>Info:</strong> ${element.dataset.info}`;
    });
});

function filterCategory(category) {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        if (category === 'all') {
            element.style.display = 'block';
        } else if (element.classList.contains(category)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}
