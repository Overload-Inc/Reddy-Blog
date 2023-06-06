import { Injectable } from '@angular/core';
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Array<Post> = [
    {id: 1, title:"Post 1", content:"My first post"},
    {id: 2, title:"Post 2", content:"My second post"},
    {id: 3, title:"Post 3", content:"My third post"},
    {id: 4, title:"Post 4", content:"My fourth post"},
  ]

  constructor() { }

  addPost(post: any) {
    this.postList.push(post);
  }

  deletePost(index: number) {
    this.postList.splice(index, 1);
  }
}
