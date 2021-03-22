let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

function countOccurrences(vehicles) {
  let vehicleObj = {};
  vehicles.forEach(vehicle => {
    vehicleObj[vehicle] = vehicleObj[vehicle] + 1 || 1;
  })
  
  Object.keys(vehicleObj).forEach(key => {
    console.log(`${key} => ${vehicleObj[key]}`);
  })
}