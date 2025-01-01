import { Component, ViewChild } from '@angular/core';
import { TeacherService } from '../../services/teacher/teacher.service';
import { Teacher } from '../../models/teacher/teacher.model';
import { AddTeacherComponent } from "../add-teacher/add-teacher.component";
import { InformationCardComponent } from "../information-card/information-card.component";
import {ColorDirective} from '../../directives/color/color.directive'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-teachers-list',
  standalone: true,
  imports: [
     InformationCardComponent,
     ColorDirective,
     MatButtonModule,
     MatCardModule,
     MatIconModule,
     FlexLayoutModule],
  templateUrl: './teachers-list.component.html',
  styleUrl: './teachers-list.component.css'
})
export class TeachersListComponent {

  public teachers: Teacher[];

  public classes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private teacherService: TeacherService,private dialog: MatDialog) {
    this.teachers = teacherService.get();
  }

  teacherRemoving = -1;


  openDialog(): void {
    const dialogRef = this.dialog.open(AddTeacherComponent, {
      data: { classes: this.classes },  // Pass the classes to the dialog
    });
    dialogRef.afterClosed().subscribe(teacher => {
      if (teacher) {
        teacher.id = Math.max(...this.teachers.map(t => t.id), 1) + 1;
        this.teacherService.Add(teacher);
        this.teachers = this.teacherService.get();
      }
    });
  }

  removeTeacher = () => {
    this.teacherService.Delete(this.teacherRemoving);
    this.teachers = this.teacherService.get();
    this.teacherRemoving = -1;
  }




}
