// Data for periodic table
const elementsData = [
    { symbol: 'H', name: 'Hydrogen', atomic: 1, category: 'nonmetal', info: 'The lightest element.' },
    { symbol: 'He', name: 'Helium', atomic: 2, category: 'nonmetal', info: 'A noble gas used in balloons.' },
    // Add more elements as needed
];

function createElementDiv(element) {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.dataset.symbol = element.symbol;
    div.dataset.name = element.name;
    div.dataset.atomic = element.atomic;
    div.dataset.info = element.info;
    div.textContent = element.symbol;
    div.addEventListener('click', () => showModal(element));
    return div;
}

function displayPeriodicTable(elements) {
    const table = document.getElementById('periodic-table');
    table.innerHTML = '';
    elements.forEach(element => table.appendChild(createElementDiv(element)));
}

function showModal(element) {
    const info = document.getElementById('element-info');
    info.innerHTML = `<strong>Element:</strong> ${element.name}<br>
                       <strong>Symbol:</strong> ${element.symbol}<br>
                       <strong>Atomic Number:</strong> ${element.atomic}<br>
                       <strong>Info:</strong> ${element.info}`;
    document.getElementById('element-info-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('element-info-modal').style.display = 'none';
}

function filterCategory(category) {
    const filteredElements = category === 'all' ? elementsData : elementsData.filter(element => element.category === category);
    displayPeriodicTable(filteredElements);
}

function sortTable(property) {
    const sortedElements = [...elementsData].sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
    displayPeriodicTable(sortedElements);
}

document.getElementById('search').addEventListener('input', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredElements = elementsData.filter(element => 
        element.name.toLowerCase().includes(query) || element.symbol.toLowerCase().includes(query)
    );
    displayPeriodicTable(filteredElements);
});

// Initial display
displayPeriodicTable(elementsData);
