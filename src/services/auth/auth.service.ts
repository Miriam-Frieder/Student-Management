import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }
  isAuth: boolean = false;
  login(email: string, password: string) {
    const userDetails = this.userService.getAllUsers().find(user => user.email === email);
    if (userDetails&&userDetails.password === password) 
      this.isAuth = true;
  }
  logout() {
    this.isAuth = false;
  }
}
