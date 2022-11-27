/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor (model) {

        this.currentSpeed = 0;
        this.model = model;
    }
    accelerate() {
        this.currentSpeed++;
    }
    brake() {
        this.currentSpeed--;
    }
    toString() {
        const carDetails = `The ${this.model} is going ${this.currentSpeed}mph`
        return carDetails;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const carMazda = new Car('Mazda');
console.log(carMazda.toString());
carMazda.currentSpeed = 60;
console.log(carMazda.toString());
carMazda.accelerate();
carMazda.accelerate();
console.log(carMazda.toString());
carMazda.brake();
console.log(carMazda.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor (model){
        super(model);
        this.motor = 'Electric';        
    }
    accelerate() {
        super.accelerate();
        super.accelerate();
    }
    toString() {
        return `The ${this.motor} car is going ${this.currentSpeed}mph`
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const elCar = new ElectricCar('Tesla');
console.log(elCar.toString());
elCar.currentSpeed = 60;
console.log(elCar.toString());
elCar.accelerate();
elCar.accelerate();
console.log(elCar.toString());
elCar.brake();
console.log(elCar.toString());