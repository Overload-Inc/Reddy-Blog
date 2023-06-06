import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  // Variable to set the PostListComponent title
  componentTitle: string = 'Post List Form';

  objectArray: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost() {
    this.objectArray.push({id: 5, title: 'New post', content: 'My new post added'});
  }

  deletePost(index: number) {
    this.objectArray.splice(index, 1);
  }
}
