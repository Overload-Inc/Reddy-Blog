import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  componentTitle: string = "Post form"
  postTitle: string = "";
  postDate: Date = new Date();
  postDetails: string = "";
  imageURL: string = "";
  postURL: string = "";
  addBackground: boolean = false;

  stepForm: string = "Click a button";

  isActive: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(postForm: any) {
    console.log(postForm);
  }

  getValue(postTitle: any) {
    console.log(postTitle);
  }

  showStep(step: string) {
    this.stepForm = step;
  }
}
