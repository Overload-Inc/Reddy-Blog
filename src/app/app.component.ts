import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Establishes the name of the component to be used outside
  templateUrl: './app.component.html', // Establishes the place which provides the look & feel for the component
  styleUrls: ['./app.component.css'] // Establishes the styles used for the component
})
export class AppComponent {
  postTitle: string = "";
  postDetails: string = "";
  imageURL: string = "";
  postURL: string = "";
  addBackground: boolean = false;

  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objectArray: Array<any> = [];

  stepForm: string = "Click a button";

  isActive: boolean = true;

  constructor() {
  }

  addPost() {
    this.objectArray.push({id: 5, title: 'New post', content: 'My new post added'});
  }

  deletePost(index: number) {
    this.objectArray.splice(index, 1);
  }

  showStep(step: string) {
    this.stepForm = step;
  }
}
