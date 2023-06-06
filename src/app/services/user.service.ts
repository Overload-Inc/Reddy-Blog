import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User> = [];

  constructor() { }

  addUser(user: User) {
    this.userList.push(user);
  }

  deleteUser(i: number) {
    this.userList.splice(i, 1);
  }
}
