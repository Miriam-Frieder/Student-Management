import { Routes } from '@angular/router';
import { StudentsListComponent } from '../components/students-list/students-list.component';
import { TeachersListComponent } from '../components/teachers-list/teachers-list.component';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { authGuard } from '../guards/auth.guard';
import { LoginComponent } from '../components/login/login.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

export const routes: Routes = [
    { path: 'students', component: StudentsListComponent, canActivate: [authGuard] },
    { path: 'teachers', component: TeachersListComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: AddUserComponent }
];
