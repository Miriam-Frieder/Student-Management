export class Student{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public grade:number,
        public adress: string,
        public phoneNumber:string,
        public scoreAvg:number,
        public isActive:boolean,
        public leaveDate?:Date,
        ){}
    


}