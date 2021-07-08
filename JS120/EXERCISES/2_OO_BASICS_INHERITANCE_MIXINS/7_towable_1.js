const toMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
}

class Truck {
  constructor() {
    Object.assign(this, toMixin);
  }
}

class Car {}

let truck = new Truck();
truck.tow();

//I can tow a trailer!
