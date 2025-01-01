import { Routes } from '@angular/router';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { TeachersListComponent } from '../components/teachers-list/teachers-list.component';
import { AddUserComponent } from '../components/add-user/add-user.component';

export const routes: Routes = [
    { path: 'students', component: StudentsListComponent },
    { path: 'teachers', component: TeachersListComponent},
    {path: 'login',component: AddUserComponent}
];
