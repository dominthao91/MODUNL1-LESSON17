class SwitchButton {
    status;
    lamp;

    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(newLamp) {
        this.lamp = newLamp;
    }

    switchOff() {
        this.lamp.turnOff();
    }

    switchOn() {
        this.lamp.turnOn();
    }
}

let ct = new SwitchButton(true, false);
let denhoc = new ElectricLamp(false);
ct.connectToLamp(denhoc);
document.write('công tắc đang?' + ct.status + '<br>');

ct.switchOn()
if (ct.status) {
    denhoc.turnOn()
    document.write('bóng đèn bật' + denhoc.status + '<br>')

} else {
    denhoc.turnOff()
    document.write('bóng đèn đang' + denhoc.status)
}
document.write('công tác đang?' + ct.status + ' <br>')
ct.switchOff()
if (ct.status) {
    denhoc.turnOn()
    document.write('bóng đèn bật' + denhoc.status + '<br>')

} else {
    denhoc.turnOff()
    document.write('bóng đèn tắt' + denhoc.status)
}


