
class ElectricLamp {
    status;
    constructor(status) {
        this.status = status;
    }
    turnOff(){
        this.status = false;
    }

    turnOn(){
        this.status = true;
    }
}

