import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Student } from '../../models/student/student';
import { log } from 'console';

@Component({
  selector: 'app-reset-student',
  standalone: true,
  imports: [],
  templateUrl: './reset-student.component.html',
  styleUrl: './reset-student.component.css'
})
export class ResetStudentComponent {

  @Input()
  student!: Student;
  @Output()
  studentNewDetails:EventEmitter<any> = new EventEmitter<any>();
  saveDetails=(firstName:string,lastName:string,grade:string,address:string,phoneNumber:string,scoreAvg:string,active:boolean)=>{
    if(!active)
      this.student.leaveDate=new Date();
    const newStudent=new Student(-1,firstName,lastName,Number(grade),address,phoneNumber,Number(scoreAvg),active);
    this.studentNewDetails.emit(newStudent);
  };
isActive: any;

}
