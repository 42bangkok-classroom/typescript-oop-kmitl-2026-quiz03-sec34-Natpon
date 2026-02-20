export class Car {
    brand?: string ="";
    model?: string ="";
    start(){
        return `${this.brand} ${this.model} is starting...`
    }
    accelerate(){
        return `${this.brand} ${this.model} is accelerating...`
    }
    brake(){
        return `${this.brand} ${this.model} is braking...`
    }
    stop(){
        return `${this.brand} ${this.model} is stopping...`
    }

}
