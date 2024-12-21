
export class Student {
    constructor(
        public id: number,
        public name: string,
        public grade: number,
        public adress: string,
        public phoneNumber: string,
        public scoreAvg: number,
        public isActive: boolean,
        public leaveDate?: Date,
        public isPaid?: boolean
    ) {

    }



}