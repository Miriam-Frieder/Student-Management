import { Component, Input, Output,EventEmitter, viewChild, ViewChild, ElementRef } from '@angular/core';
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
  student: Student;
  @Output()
  studentNewDetails:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('dateLeft')dateLeft:ElementRef<HTMLInputElement>;
  saveDetails=(firstName:string,lastName:string,grade:string,address:string,phoneNumber:string,scoreAvg:string,active:boolean)=>{
    
    const newStudent=new Student(-1,firstName,lastName,Number(grade),address,phoneNumber,Number(scoreAvg),active);
    newStudent.leaveDate=this.dateLeft?new Date(this.dateLeft.nativeElement.value):undefined;
    this.studentNewDetails.emit(newStudent);
  };
  handleChange=(isActive:boolean)=>{
    this.student.isActive=isActive;

  }
  convertDatToString=(date:Date|undefined)=>date?date.toISOString().split('T')[0]:"";
  




}
