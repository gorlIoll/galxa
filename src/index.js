// Import Sarata.js dependency
const sarata = require('sarata');

// Define Galaxy class
class Galaxy {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  simulate() {
    console.log(`Simulating ${this.name} galaxy...`);
    // Logic to simulate galaxy
  }
}

// Create a new instance of Galaxy
const myGalaxy = new Galaxy('MyGalaxy', 'large');

// Simulate the galaxy using Sarata.js task runner
sarata(() => {
  myGalaxy.simulate();
});
