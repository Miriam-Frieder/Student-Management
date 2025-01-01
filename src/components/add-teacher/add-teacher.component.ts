import { Component, EventEmitter, Input, Output,Inject } from '@angular/core';
import { Teacher } from '../../models/teacher/teacher.model';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
   
  ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {

    @Output()
    teacherDetails:EventEmitter<any> = new EventEmitter<any>();

    teacherClasses:number[]=[];
    
    constructor(
      public dialogRef: MatDialogRef<AddTeacherComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    saveDetails=(name:string)=>{
      const teacher=new Teacher(0,name,this.teacherClasses);
      this.dialogRef.close(teacher);

      this.teacherDetails.emit(teacher);
      
    };

}
