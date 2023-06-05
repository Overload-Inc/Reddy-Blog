import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  postTitle: string = "";
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

  showStep(step: string) {
    this.stepForm = step;
  }
}
