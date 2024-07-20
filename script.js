document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        alert(`Element: ${element.dataset.name}\nSymbol: ${element.dataset.symbol}\nAtomic Number: ${element.dataset.atomic}`);
    });
});
