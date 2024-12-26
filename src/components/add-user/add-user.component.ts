import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { InformationCardComponent } from '../information-card/information-card.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,InformationCardComponent,MatButtonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  userForm: FormGroup;
  userService: UserService;
  router: Router;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    role: ['', [Validators.required, Validators.pattern(/^(director|teacher|secretary|student)$/)]],
    email: ['', [Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
    });
    }
   onSubmit() {
    
    if(this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/app-root']);
      
    } 
  }
   
}
