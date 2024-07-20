// Data for periodic table (loaded from external JSON file)
const elementsData = [
    { symbol: 'H', name: 'Hydrogen', atomic: 1, category: 'nonmetal', info: 'The lightest element.' },
    { symbol: 'He', name: 'Helium', atomic: 2, category: 'noble gas', info: 'A noble gas used in balloons.' },
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
                       <strong>Info:</strong> ${element.info}<br><br>
                       <small>Click on any element to get its details.</small>`;
    document.getElementById('element-info-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('element-info-modal').style.display = 'none';
}

function applyFilters() {
    const category = document.getElementById('category-filter').value;
    const atomicMin = parseInt(document.getElementById('atomic-min').value) || 1;
    const atomicMax = parseInt(document.getElementById('atomic-max').value) || Infinity;
    
    const filteredElements = elementsData.filter(element => 
        (category === 'all' || element.category === category) &&
        element.atomic >= atomicMin && element.atomic <= atomicMax
    );
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

function toggleLayout() {
    const table = document.getElementById('periodic-table');
    if (table.classList.contains('grid-layout')) {
        table.classList.remove('grid-layout');
        table.classList.add('list-layout');
    } else {
        table.classList.remove('list-layout');
        table.classList.add('grid-layout');
    }
}

function showComparison(element1, element2) {
    const compInfo1 = document.getElementById('comparison-info-1');
    const compInfo2 = document.getElementById('comparison-info-2');
    
    compInfo1.innerHTML = `<strong>Element 1:</strong><br>
                           <strong>Name:</strong> ${element1.name}<br>
                           <strong>Symbol:</strong> ${element1.symbol}<br>
                           <strong>Atomic Number:</strong> ${element1.atomic}<br>
                           <strong>Info:</strong> ${element1.info}`;
                           
    compInfo2.innerHTML = `<strong>Element 2:</strong><br>
                           <strong>Name:</strong> ${element2.name}<br>
                           <strong>Symbol:</strong> ${element2.symbol}<br>
                           <strong>Atomic Number:</strong> ${element2.atomic}<br>
                           <strong>Info:</strong> ${element2.info}`;
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

// Example usage of comparison feature
// showComparison(elementsData[0], elementsData[1]);
