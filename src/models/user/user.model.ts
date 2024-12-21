import { Role } from "./role.model";

export class User{
    constructor(
        public id:number,
        public name:string,
        public role:Role,
        public email:string,
        public password:string,
    ){}
}