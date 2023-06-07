import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormControl, FormBuilder, Validators} from "@angular/forms";

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

  /**
   * Constructor with FormBuilder and dependency injection properties.
   * @param formBuilder the FormBuilder instance.
   * @param userService the UserService instance.
   */
  constructor(private  formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contactDetails: formBuilder.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNumber: ['', [Validators.required, Validators.pattern(this.contactRegex)]]
      }),
      skills: formBuilder.array([])
    });

    this.userList = userService.userList;
  }

  ngOnInit(): void {
  }

  get userControl() {
    return this.userForm.controls;
  }

  addUser() {
    const user = {
      fullName: this.userControl.fullName.value,
      email: this.userControl.email.value,
      address: this.userControl.contactDetails.address.value
    };

    this.userService.addUser(user);
  }

  addSkills(skill: HTMLInputElement) {
    this.userControl.skills.push(new FormControl(skill.value));

    skill.value = '';
  }

  deleteUser(i: number) {
    this.userService.deleteUser(i);
  }

  removeSkill(index: number) {
    this.userControl.skills.removeAt(index);
  }
}
