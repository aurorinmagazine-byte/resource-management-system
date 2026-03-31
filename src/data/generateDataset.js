const fs = require('fs');

// List of architecture firms
const architectureFirms = [
    "Firm A", "Firm B", "Firm C", "Firm D", "Firm E",
    // ... (add more firms)
];

// Define recovery value ranges based on some criteria
const recoveryValueRange = {
    low: 100000, // e.g., minimum recovery value
    high: 1000000 // e.g., maximum recovery value
};

// Define regions
const regions = [
    "North America", "Europe", "Asia", "South America", "Australia"
    // ... (add more regions)
];

// Generate a random recovery value
function getRandomRecoveryValue() {
    return Math.floor(Math.random() * (recoveryValueRange.high - recoveryValueRange.low + 1)) + recoveryValueRange.low;
}

// Generate the project dataset
function generateDataset(numProjects) {
    const projects = [];

    for (let i = 0; i < numProjects; i++) {
        const project = {
            id: i + 1,
            firm: architectureFirms[Math.floor(Math.random() * architectureFirms.length)],
            recoveryValue: getRandomRecoveryValue(),
            region: regions[Math.floor(Math.random() * regions.length)],
            // Add other metrics as required
        };
        projects.push(project);
    }

    return projects;
}

// Create and save the dataset
function saveDataset() {
    const dataset = generateDataset(1500);
    fs.writeFileSync('src/data/dataset.json', JSON.stringify(dataset, null, 2));
}

saveDataset();