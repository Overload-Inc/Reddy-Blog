import { Injectable } from '@angular/core';
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Array<Post> = [];

  constructor() { }

  addPost(post: Post) {
    this.postList.push(post);
  }

  deletePost(index: number) {
    this.postList.splice(index, 1);
  }
}
