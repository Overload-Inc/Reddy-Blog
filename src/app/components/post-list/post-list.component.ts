import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  // Variable to set the PostListComponent title
  componentTitle: string = 'Post List Form';

  // Array to set the post list
  objectArray: Array<any>;

  constructor(private postService: PostService) {
    this.objectArray = postService.postList;
  }

  ngOnInit(): void {
  }

  addPost() {
    const post: Post = {id: 5, title: 'New post', content: 'My new post added'};

    this.postService.addPost(post);
  }

  deletePost(index: number) {
    this.postService.deletePost(index);
  }
}
