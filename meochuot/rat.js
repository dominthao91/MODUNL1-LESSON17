class Rat{
    constructor(name,weight,speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }
    sound(text){
        document.write(this.name + ' '+text);
    }
}
let jerry = new Rat('jerry',50,20);
let jerry2 = new Rat('jerry2',60,30);