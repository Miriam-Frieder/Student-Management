import { Subject } from "./subject.enum";

export class Course{
    constructor(
       public id:number,
       public name:string,
       public subject:Subject
    ){}
}