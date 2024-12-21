import { User } from "../user/user.model";

export class Teacher {
    constructor(
        public id: number,
        public name: string,
        public classId: number[]
    ) {
        
    }
}