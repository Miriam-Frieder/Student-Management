import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../models/teacher/teacher.model';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {

    @Input()
    classes:number[];

    @Output()
    teacherDetails:EventEmitter<any> = new EventEmitter<any>();

    teacherClasses:number[]=[];
    
    handleChange=(className:string,status:boolean)=>{
      console.log(className);
      
      if(status)
        this.teacherClasses.push(Number(className));
      else
        this.teacherClasses=this.teacherClasses.filter(c=>c!=Number(className))
    }

    saveDetails=(name:string)=>{
    
      const teacher=new Teacher(0,name,this.teacherClasses)
      this.teacherDetails.emit(teacher);
    };

}
