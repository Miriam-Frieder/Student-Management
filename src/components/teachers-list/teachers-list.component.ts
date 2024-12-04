import { Component, ViewChild } from '@angular/core';
import { TeacherService } from '../../services/teacher/teacher.service';
import { Teacher } from '../../models/teacher/teacher.model';
import { AddTeacherComponent } from "../add-teacher/add-teacher.component";
import { InformationCardComponent } from "../information-card/information-card.component";
import {ColorDirective} from '../../directives/color/color.directive'
import { log } from 'console';

@Component({
  selector: 'app-teachers-list',
  standalone: true,
  imports: [AddTeacherComponent, InformationCardComponent,ColorDirective],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css'
})
export class TeachersListComponent {

  public teachers: Teacher[];

  public classes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private teacherService: TeacherService) {
    this.teachers = teacherService.get();
  }

  teacherAdding = false;

  teacherRemoving = -1;

  showRemovePopup = (id: number) => this.teacherRemoving = id;

  closeRemovePopup = () => this.teacherRemoving = -1;

  addTeacher = () => {
    this.teacherAdding = true;
  }

  saveDetails = (teacher: Teacher) => {
    teacher.id = Math.max(...this.teachers.map(t => t.id), 1) + 1;
    this.teacherService.Add(teacher);
    this.teachers = this.teacherService.get();
    this.teacherAdding = false;
  }

  removeTeacher = () => {
    this.teacherService.Delete(this.teacherRemoving);
    this.teachers = this.teacherService.get();
    this.closeRemovePopup();
  }


}
