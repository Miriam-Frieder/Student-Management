import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user/user.model';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule,MatFormField,MatLabel,MatInputModule,MatOption,MatSelectModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
}) 
export class AddUserComponent {
  userForm: FormGroup;
  router: Router;
  constructor(private fb: FormBuilder,private userService: UserService) {
    this.userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    // role: ['', [Validators.required, Validators.pattern(/^(director|teacher|secretary|student)$/)]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
    });
    }
   onSubmit() {
    if(this.userForm.valid) 
      this.userService.addUser({...this.userForm.value} as Omit<User, 'id'>);
  }
   
}
