export class Character {
    name: string;
    health: number = 100;
    constructor (nam: string){
        this.name = nam;
    }
    getName(){
        return this.name;

    }
    getHealth(){
        return this.health;

    }
    receiveDamage(da: number){
        this.health--;
    }
}
