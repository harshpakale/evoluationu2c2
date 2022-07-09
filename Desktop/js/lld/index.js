// let regNum = document.getElementById("regNum");
// let type = document.getElementById("type");

class Vehicle {
    #type;
    #color;
    #regNum;
    constructor(type, color, num) {
        this.#type = type;
        this.#color = color;
        this.#regNum = num;
   
    }

    get regNum () {
        return `MH ${this.#regNum}`;
    }
    get type(){
        return this.#type
    }
}

class Car extends Vehicle {

    constructor(color, num) {
        super('Car', color, num)
    }
}

class Bike extends Vehicle {

    constructor(color, num) {
        super('Bike', color, num)
    }
}

class Bus extends Vehicle {

    constructor(color, num) {
        super('Bus', color, num)
    }
}


// let car1 = new Car ('black', 1234);
// console.log('car1:', car1.regNum)

class ParkingLot {

    #floors; 

    constructor(number) {

    this.#floors=[];
    this.numberOfFloors = number

    for(let i = 0; i < number; i++){

       this.#floors[i] = new ParkingFloor(i,number);
    }

    }

    findSlot (type) {
        // we need to check type of vehicle & empty slot

        for (let i=0;i<this.numberOfFloors;i++){

            //iterating through slots
            for(let slot of this.#floors[i].parkingSpot){
                if (slot.type === type && !slot.isBooked) {
                    return {floornumber: i, slot: slot}
                }
            }
        }
        return false;
    }

    parkingVehicle(vehicle){

        let slot = this.findSlot(vehicle.type)
       slot.slot.book = true
       console.log('slot:', slot)
    }
}

class ParkingFloor{

    #floornumber;

    constructor(floornumber, maxFloor) {
        this.#floornumber = floornumber;
        this.parkingSpot = [];

        for (let i = 0; i < maxFloor; i++){

            //depending upon floor num we need to push vehicle

            if (i===0) {
                this.parkingSpot.push(new Slot ('Bus',i))
            }
            else if (i == 1){
                this.parkingSpot.push(new Slot('Bike',i))
            }
            else {
                this.parkingSpot.push(new Slot('Car',i))
            }
        }
    }

}

class Slot{
    #isBooked

    constructor(type, number) {
        this.number = number
        this.type = type
        this.#isBooked = false
    }

    get isBooked() {
        return this.#isBooked
    }
    set book (bool){
       this.#isBooked = bool

       
    }
}

let p = new ParkingLot(3)

let c1 = new Car('black',9999)

let b1 = new Bike('Blue', 1480)
let b2 = new Bike('black', 9007)
p.parkingVehicle(b2);