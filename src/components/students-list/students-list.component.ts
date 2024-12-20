import { Component, ViewChild} from '@angular/core';
import { Student } from '../../models/student/student.model';
import { ResetStudentComponent } from "../reset-student/reset-student.component";
import { AddStudentComponent } from "../add-student/add-student.component";
import { InformationCardComponent } from "../information-card/information-card.component";
import { IconPipe } from '../../pipes/icon/icon.pipe';


@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [ResetStudentComponent, AddStudentComponent, InformationCardComponent,IconPipe],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
  students = [
    new Student(0, "angular", "cli", 17, "web", "1234567890", 100, true, new Date(),true),
    new Student(1, "react", "vite", 20, "web", "1234567890", 100, true, new Date(),false),
  ]
  studentResetting = -1;
  studentAdding = false;
  studentRemoving=-1;

  showRemovePopup=(id:number)=>this.studentRemoving=id;
  
  closeRemovePopup=()=>this.studentRemoving=-1;

  removeStudent = () => {
    const newStudents = this.students.filter(student => student.id != this.studentRemoving);
    this.students = newStudents;
    this.closeRemovePopup();
  }

  resetStudent = (id: number) => {
    this.studentResetting = id;
  }
  
  changeStudentDetails = (newStud: Student) => {
    let original: Student | undefined = this.students.find(student => student.id == this.studentResetting);
    if (original) {
      original.firstName = newStud.firstName,
        original.lastName = newStud.lastName,
        original.grade = newStud.grade,
        original.adress = newStud.adress,
        original.isActive = newStud.isActive,
        original.phoneNumber = newStud.phoneNumber,
        original.scoreAvg = newStud.scoreAvg,
        original.leaveDate=newStud.leaveDate
      console.log(original);

    }
    this.studentResetting = -1;

  }
  addStudent = () => {
    this.studentAdding = true;
  }
  addStudentDetails = (newStud: Student) => {
    newStud.id = Math.max(...this.students.map(student => student.id)) + 1;
    this.students.push({ ...newStud });
    this.studentAdding = false;
  }
}
