import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  private teachers: Teacher[] = [
    new Teacher(1,"Sara",[1,4,7]),
    new Teacher(2,"Chaya",[1,6,9]),
  ]
  get() {
    return this.teachers;
  }
  Add(teacher: Teacher) {
    this.teachers.push(teacher);
  }
  Update(id:number,teacher: Teacher) {
    const original=this.teachers.find(t=>t.id==id)
    if(!original)
      return;
    original.name=teacher.name;
    original.classId=teacher.classId;
  }
  Delete(id:number){
    this.teachers=this.teachers.filter(t=>t.id!=id);
  }
}
