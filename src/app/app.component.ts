import { Component } from '@angular/core';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { BlessingComponent } from "../components/blessing/blessing.component";
import { ResetStudentComponent } from '../components/reset-student/reset-student.component';

type Blessing ='Good Morning!'|'Good Afternoon!'|'Good Evening!'|'Good Night!';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsListComponent, BlessingComponent,ResetStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'My Students';
    
  
}
