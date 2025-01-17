//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js").Vehicle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.scheduleService = false;
        this.maxSpeed = 160;
        this.numberOfWheels = 4;
        this.fuel = 10;
        this.maxPassengers = 5;
        this.passenger = 0;
    }
    checkService(){
        if (this.milage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    loadPassenger(num){
        if(this.passenger < this.maxPassengers){
            if ((num + this.passenger)<=this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " is full");
            }
        }
    }
    }
    start(){
        if (this.fuel > 0){
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.strted = false;
        }
    }
    let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
    myCar.start()
    myCar.loadPassenger(5)
    myCar.stop()
    myCar.checkService()
    console.log(myCar)
