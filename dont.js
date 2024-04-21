require('dotenv').config();
const { CarType, Vehicle, sequelize } = require('./models'); // Import your Sequelize models

async function seedDatabase() {
  try {
    // Sync the models with the database
    await sequelize.sync({ force: true }); // This will drop existing tables and recreate them

    // Seed car types
    const carTypes = await CarType.bulkCreate([
      { name: 'hatchback' },
      { name: 'suv' },
      { name: 'sedan' },
    ]);

    // Seed vehicles
    const hatchbackTypeId = carTypes.find(type => type.name === 'hatchback').id;
    const suvTypeId = carTypes.find(type => type.name === 'suv').id;
    const sedanTypeId = carTypes.find(type => type.name === 'sedan').id;

    await Vehicle.bulkCreate([
      { name: 'Vehicle 1', carTypeId: hatchbackTypeId },
      { name: 'Vehicle 2', carTypeId: hatchbackTypeId },
      { name: 'Vehicle 3', carTypeId: suvTypeId },
      { name: 'Vehicle 4', carTypeId: suvTypeId },
      { name: 'Vehicle 5', carTypeId: sedanTypeId },
      // Add more vehicles as needed
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

// Call the function to seed the database
seedDatabase();
