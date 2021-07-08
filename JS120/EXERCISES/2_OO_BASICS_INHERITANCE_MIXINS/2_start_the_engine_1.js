class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    console.log('Ready to go!');
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }


}



let truck = new Truck(2003);
console.log(truck.year); // 2003
