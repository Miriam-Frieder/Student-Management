import { Component, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Student } from '../../models/student/student.model';
import { Course } from '../../models/course/course.model';
import { Subject } from '../../models/course/subject.enum';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformationCardComponent } from '../information-card/information-card.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FormsModule,
    InformationCardComponent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  @Input()
  student: Student;

  @Output()
  studentNewDetails:EventEmitter<any> = new EventEmitter<any>();
  
  @ViewChild('dateLeft')dateLeft:ElementRef<HTMLInputElement>;

  selectedCourses: number[] = [];

  onSubmit=()=>{
    
    // const newStudent={...this.student};
    // newStudent.leaveDate=this.dateLeft?new Date(this.dateLeft.nativeElement.value):undefined;
    this.studentNewDetails.emit(this.student);
  };
  handleChange=(isActive:boolean)=>{
    this.student.isActive=isActive;

  }

  convertDatToString=(date:Date|undefined)=>date?date.toISOString().split('T')[0]:"";

  courses=[
    new Course(1,"Teaching",Subject.Teaching),
    new Course(2,"Computers",Subject.ComputerPrograming),
    new Course(3,"Acounting",Subject.Accounting)
  ]




}
