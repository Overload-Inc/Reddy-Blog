import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = "";
  email: string = "";
  address: string = "";

  userList: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.userList.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });
  }

  deleteUser(i: number) {
    this.userList.splice(i, 1);
  }
}
