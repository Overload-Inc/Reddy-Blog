import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormArray, FormControl, NgForm, PatternValidator, Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  componentTitle: string = "Users Form";

  userList: Array<User>;
  userForm: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9]{9}";

  constructor(private user: UserService) {
    this.userList = user.userList;

    this.userForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        shippingAddress: new FormControl('', [Validators.required]),
        contactNumber: new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)])
      }),
      skills: new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  get fullName() {
    return this.userForm.get('fullName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get address() {
    return this.userForm.get('contactDetails.address');
  }

  get shippingAddress() {
    return this.userForm.get('contactDetails.shippingAddress');
  }

  get contactNumber() {
    return this.userForm.get('contactDetails.contactNumber');
  }

  get skills() {
    return this.userForm.get('skills') as FormArray;
  }

  addUser() {
    const user = {
      fullName: this.fullName.value, email: this.email.value, address: this.address.value};

    this.user.addUser(user);
  }

  addSkills(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));

    skill.value = '';
  }

  deleteUser(i: number) {
    this.user.deleteUser(i);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
