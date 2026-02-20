export class User {
    firstname?: string = "";
    lastname?: string = "";
    private age: number = 0;
    static BIRTH_YEAR: number = 2000;
    setFirstname(first: string){
        this.firstname = first;

    }
    setLastname(last: string):string{
       return this.lastname = last;

    }
    setAge(num: number): number{
        return this.age = num;

    }
    getAge(): number{
        return this.age;

    }
    getFullName(): string{
        return `${this.firstname} ${this.lastname}`

    }
}
