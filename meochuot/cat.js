class Cat{
    constructor(name,weight,speed) {
        this.name = name;
        this.weight =weight;
        this.speed = speed;
    }
    sound(text){
        document.write(this.name +' '+text)
    }
    catchRat(rat){
        if (this.speed > rat.speed){
            document.write(this.name + ':túm được mày rồi: &nbsp'+ rat.name+'<br>');
        }
    }
    eatRat(rat){
        if (rat.status){
            this.weight += rat.weight;
            rat.status = false;
            document.write(this.name + ' :ăn được mày rồi nhé : &nbsp' + rat.name + '<br>')
        }
    }
}
let tom = new Cat('tom',60,40);
tom.catchRat(jerry);
tom.eatRat(jerry);
document.write('tôm vô địch:'+tom.weight +'kg')