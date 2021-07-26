class Human{
    name;
    age;
    weight;
    constructor(name,age,weight) {
        this.name = name;
        this.age=age;
        this.weight=weight;
    }
    Humen(){
        return this.name;
    }
    isMale(){
        if(this.age=="nam"){
            return true;
        } else {
            return false;
        }
    }
    setGender(age){
        this.age=age;
    }
    checkApple(Apple){
        Apple.isEmpty();
    }
    eatApple(Apple){
        if (Apple.Empty) {
            this.weight+=1;
            Apple.Decrease();
        }
    }
    getWeight(){
        return this.weight;
    }
}  let tao1= new Apple("tao1");
let Adam= new Human("Adam","nam",50);
let Eva = new Human("Eva","nu",48);
Adam.eatApple(tao1);
Eva.eatApple(tao1);
Adam.eatApple(tao1);
Eva.eatApple(tao1);
Adam.eatApple(tao1);
document.write(tao1.decrease)
Eva.eatApple(tao1);
Adam.checkApple(tao1);
Adam.eatApple(tao1);
Eva.eatApple(tao1);
Adam.eatApple(tao1);
Eva.eatApple(tao1);
Adam.eatApple(tao1);
Eva.eatApple(tao1);
document.write(Eva.weight);
document.write(Adam.weight);
