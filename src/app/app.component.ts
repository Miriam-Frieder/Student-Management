import { Component } from '@angular/core';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { BlessingComponent } from "../components/blessing/blessing.component";
import { TeachersListComponent } from "../components/teachers-list/teachers-list.component";

type Blessing ='Good Morning!'|'Good Afternoon!'|'Good Evening!'|'Good Night!';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsListComponent, BlessingComponent, TeachersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
    
  
}
