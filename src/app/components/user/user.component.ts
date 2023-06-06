import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  componentTitle: string = "Users Form";

  fullName: string = "";
  email: string = "";
  address: string = "";

  userList: Array<User>;

  constructor(private user: UserService) {
    this.userList = user.userList;
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    this.fullName = userForm.value.fullName;
    this.email = userForm.value.email;
    this.address = userForm.value.address;

    this.addUser();
  }

  getValue(fullName: any) {
    console.log(fullName);
  }

  addUser() {
    const user = {
      fullName: this.fullName, email: this.email, address: this.address};

    this.user.addUser(user);
  }

  deleteUser(i: number) {
    this.user.deleteUser(i);
  }
}
