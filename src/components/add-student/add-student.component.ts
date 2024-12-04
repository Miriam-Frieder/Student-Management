import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../models/student/student.model';


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Output()
  studentDetails:EventEmitter<any>=new EventEmitter<any>();
  saveDetails=(firstName:string,lastName:string,grade:string,address:string,phoneNumber:string,scoreAvg:string,isActive:boolean)=>{
    const newStudent=new Student(-1,firstName,lastName,Number(grade),address,phoneNumber,Number(scoreAvg),isActive);
    this.studentDetails.emit(newStudent);
  };

}

