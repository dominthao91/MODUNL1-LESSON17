class Control {
    code;
    constructor(code) {
        this.code = code;
    }

    conect(tivi) {
        this.control = tivi;
    }

    turnonoff() {
        if (this.code == this.control.code) {
            this.control.turnonoff();
        }
    }

    chanelUp() {
        if (this.code == this.control.code) {
            this.control.nextchanelUp();
        }
    }

    chanelDown() {
        if (this.code == this.control.code) {
            this.control.nextchanelDown();
        }
    }

    upVolume() {
        if (this.code == this.control.code) {
            this.control.volumeUp();
        }
    }

    downVolume() {
        if (this.code == this.control.code) {
            this.control.volumeDown();
        }
    }
}

let samsung = new Tivi(1, 15, 235);
let control = new Control(235);
control.conect(samsung);
console.log(samsung.status);
control.turnonoff();
document.write(samsung.status);
document.write(samsung.chanel);
document.write(samsung.volume);
control.chanelUp();
control.chanelUp();
control.chanelUp();
control.chanelUp();
control.upVolume();
control.upVolume();
control.upVolume();
control.upVolume();
control.upVolume();
control.upVolume();
control.upVolume();
control.upVolume();
document.write(samsung.chanel);
document.write(samsung.volume);