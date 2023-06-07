import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  componentTitle: string = "Post form"

  postDate: Date = new Date();
  postList: Array<Post>;
  postForm: any;
  counter: number = 0;

  constructor(private postService: PostService) {
    this.postList = postService.postList;

    this.postForm = new FormGroup({
      postTitle: new FormControl('', Validators.required),
      postDetails: new FormControl('', Validators.required),
      imageURL: new FormControl('', Validators.required),
      postURL: new FormControl('', Validators.required),
      addBackground: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  get postTitle() {
    return this.postForm.get('postTitle');
  }

  get postDetails() {
    return this.postForm.get('postDetails');
  }

  get imageURL() {
    return this.postForm.get('imageURL');
  }

  get postURL() {
    return this.postForm.get('postURL');
  }

  get addBackground() {
    return this.postForm.get('addBackground');
  }

  addPost() {
    const post: Post = {
      id: this.counter + 1,
      title: this.postTitle.value,
      content: this.postDetails.value,
    };

    this.postService.addPost(post);
  }
}
