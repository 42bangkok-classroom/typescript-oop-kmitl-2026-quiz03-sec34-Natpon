export class OnlineCourse {
    public courseName: string;
    public maxStudents: number;
    private enrolledStudents: number;
    private isOpen: boolean;
    constructor(nam: string , max: number){
        this.courseName = nam;
        this.maxStudents = max;
    }
    /*public OnlineCourse(nam: string,max: number){

    }*/
    public enroll(): boolean{
        this.maxStudents--;
        if(this.maxStudents >= 0){
            return true;
        }
        else{
            return false ;
        }

    }
    public closeCourse(): void{
        this.getCourseStatus = "Closed";

    }
    public getAvailableSeats(): number{
        
        if(this.maxStudents <= 0){
            this.maxStudents = 0;
        }
        return this.maxStudents;

    }
    public getCourseStatus(): string{
        if(this.maxStudents  ){
            return "Closed";
        }
        return "Open";
    }
    private canEnroll(): boolean{
        if(this.getCourseStatus !== "Closed"){
            return true;
        }
        return false;
    }

    
}
