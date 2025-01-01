import { Role } from "./role.model";

export class User{
    public id:number;
    public name:string;
    public role:Role;
    public email:string;
    public password:string;
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
   
}