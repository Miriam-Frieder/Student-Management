import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users:User[]=[
    // new User(1,"miriam","director","m0556777068","1234")
  ]
  getAllUsers(): User[] {
    return this.users;
  }
  getUser(id: number): User|undefined {
    return this.users.find(u => u.id === id);
  }
  addUser(user: Omit<User,'id'>): void {
    this.users.push({...user, id: Math.max(...this.users.map(u => u.id)) + 1});
  }
  updateUser(id: number, user: Partial<User>): void {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users[index] = {...this.users[index],...user };
    }
  }
  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id!== id);
  }

}
