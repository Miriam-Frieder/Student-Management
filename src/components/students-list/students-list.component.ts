import { Component, ViewChild} from '@angular/core';
import { Student } from '../../models/student/student.model';
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { InformationCardComponent } from "../information-card/information-card.component";
import { IconPipe } from '../../pipes/icon/icon.pipe';


@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [StudentDetailsComponent, InformationCardComponent,IconPipe],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
  students = [
    new Student(0, "angular", 17, "web", "1234567890", 100, true, new Date(),true),
    new Student(1, "react", 20, "web", "1234567890", 100, true, new Date(),false),
  ]
  emptyStudent = new Student(-1, "", 0, "", "", 0, false);
  studentResetting = -1;
  studentAdding = false;
  studentRemoving=-1;

  removeStudent = () => {
    const newStudents = this.students.filter(student => student.id != this.studentRemoving);
    this.students = newStudents;
    this.studentRemoving = -1;
  }
  
  changeStudentDetails = (newStud: Student) => {
    let original: Student | undefined = this.students.find(student => student.id == this.studentResetting);
    if (original) {
        original.name=newStud.name;
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
  addStudentDetails = (newStud: Student) => {
    newStud.id = Math.max(...this.students.map(student => student.id)) + 1;
    this.students.push({ ...newStud });
    this.studentAdding = false;
  }
}
