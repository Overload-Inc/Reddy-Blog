import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  componentTitle: string = "Users Form";

  name: string = "";
  email: string = "";
  address: string = "";

  userList: Array<User>;

  constructor(private user: UserService) {
    this.userList = user.userList;
  }

  ngOnInit(): void {
  }

  addUser() {
    const user = {name: this.name, email: this.email, address: this.address};

    this.user.addUser(user);
  }

  deleteUser(i: number) {
    this.user.deleteUser(i);
  }
}
