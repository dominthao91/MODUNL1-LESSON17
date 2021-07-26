class Apple {
    constructor(name) {
        this.weight = 10;
        this.name = name;
        this.decrease = 0;
        this.Empty = true;
    }

    Decrease() {
        if (this.decrease < this.weight) {
            return this.decrease += 1;
        } else {
            this.Empty = false;
            return console.log("Het roi nhe");
        }

    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        if (this.Empty) {
            return (this.weight - this.decrease);
        } else {
            return console.log("Het roi nhe");
        }
    }
}