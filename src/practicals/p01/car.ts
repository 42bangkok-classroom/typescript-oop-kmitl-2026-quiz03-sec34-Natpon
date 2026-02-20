export class Car {
    brand?: string ="";
    model?: string ="";
    start(): string{
        return `${this.brand} ${this.model} is starting...`
    }
    accelerate(): string{
        return `${this.brand} ${this.model} is accelerating...`
    }
    brake(): string{
        return `${this.brand} ${this.model} is braking...`
    }
    stop(): string{
        return `${this.brand} ${this.model} is stopping...`
    }

}
