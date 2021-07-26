class Tivi {
    constructor(chanel, volume, code) {
        this.chanel = 1;
        this.volume = volume;
        this.code = code;
        this.status = false;
    }

    turnonoff() {
        if (this.status) {
            this.status = false;
        } else {
            this.status = true;
        }
    }

    nextchanelUp() {
        this.chanel += 1;
    }

    nextchanelDown() {
        this.chanel -= 1;
    }

    volumeUp() {
        this.volume += 1;
    }

    volumeDown() {
        this.volume -= 1;
    }
}