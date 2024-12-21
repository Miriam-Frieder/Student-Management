import { Component } from '@angular/core';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { BlessingComponent } from "../components/blessing/blessing.component";
import { TeachersListComponent } from "../components/teachers-list/teachers-list.component";
import { AddUserComponent } from "../components/add-user/add-user.component";

type Blessing ='Good Morning!'|'Good Afternoon!'|'Good Evening!'|'Good Night!';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsListComponent, BlessingComponent, TeachersListComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  

  addUser:boolean = false;
    
  
}
