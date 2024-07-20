# Interactive Periodic Table

## Overview

This project is an interactive periodic table built using HTML, CSS, and JavaScript. It provides a visual representation of the elements with detailed information accessible via clicks. The table supports searching and filtering by element type.

## Features

- **Interactive Elements**: Click on any element to view its details.
- **Search Bar**: Search for elements by symbol or name.
- **Category Filter**: Filter elements by type (e.g., Metals, Nonmetals).
- **Color-Coded Categories**: Elements are color-coded based on their type for easy identification.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Credits](#credits)
- [License](#license)

## Getting Started

### Prerequisites

To run this project, you need a web browser. No additional software or libraries are required.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/interactive-periodic-table.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd interactive-periodic-table
   ```

3. **Open the `index.html` file** in your preferred web browser to view the periodic table.

## Usage

1. **Search for Elements**:
   - Use the search bar to find elements by symbol or name.
   - The table will display only those elements that match the search criteria.

2. **Filter by Category**:
   - Use the dropdown filter to display elements by their type (e.g., Metals, Nonmetals).
   - The table will update to show only elements in the selected category.

3. **View Element Details**:
   - Click on any element in the table to view its detailed information, including symbol, name, atomic number, and additional info.

## File Structure

- `index.html`: Main HTML file for the periodic table.
- `styles.css`: CSS file containing styles for the periodic table and controls.
- `scripts.js`: JavaScript file containing logic for creating, populating, and filtering the table.
- `README.md`: This file.

### Example Code

Here is a brief snippet showing how the periodic table is structured and styled:

**HTML (index.html)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Periodic Table</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="controls">
    <input type="text" id="search-bar" placeholder="Search for elements...">
    <select id="category-filter">
      <option value="">All Categories</option>
      <option value="metal">Metals</option>
      <option value="nonmetal">Nonmetals</option>
      <option value="metalloid">Metalloids</option>
      <option value="noble">Noble Gases</option>
      <option value="lanthanide">Lanthanides</option>
      <option value="actinide">Actinides</option>
    </select>
  </div>
  <table id="periodic-table"></table>
  <script src="scripts.js"></script>
</body>
</html>
```

**CSS (styles.css)**
```css
/* Base styles */
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  margin: 0;
}

table {
  border-collapse: collapse;
  margin-top: 20px;
}

/* Element colors */
.alkali { background-color: #ffcccc; } /* Light pink */
.alkaline { background-color: #ccffcc; } /* Light green */
.transition { background-color: #cce0ff; } /* Light blue */
.post-transition { background-color: #ffcc99; } /* Light orange */
.metalloid { background-color: #ffff99; } /* Yellow */
.nonmetal { background-color: #e6ccff; } /* Light purple */
.noble { background-color: #e0e0e0; } /* Light grey */
.lanthanide { background-color: #b3d9d9; } /* Light teal */
.actinide { background-color: #d9b3b3; } /* Light brown */
```

**JavaScript (scripts.js)**
```javascript
const elements = [
  // Define all 118 elements with their details
  { symbol: 'H', name: 'Hydrogen', atomic: 1, category: 'nonmetal', info: 'Most abundant element in the universe.', position: { row: 1, col: 1 } },
  // Add remaining elements here
];

function createTable() {
  // Table creation logic
}

function populateTable() {
  // Populate table with elements
}

function showDetails(symbol) {
  // Show details of the selected element
}

function filterTable() {
  // Filter table based on search and category
}

document.getElementById('search-bar').addEventListener('input', filterTable);
document.getElementById('category-filter').addEventListener('change', filterTable);

createTable();
```

## Credits

- This project is inspired by traditional periodic tables and designed for educational purposes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
