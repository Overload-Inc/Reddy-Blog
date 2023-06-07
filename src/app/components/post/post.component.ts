import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/post";
import {NoSpace} from "../../validators/nospace.validator";

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

  constructor(private formBuilder: FormBuilder, private postService: PostService) {
    this.postForm = formBuilder.group({
      postTitle: ['', Validators.required],
      postDetails: ['', Validators.required],
      imageURL: ['', Validators.required],
      postURL: ['', [Validators.required, NoSpace.noSpaceValidator]],
      addBackground: ['']
    });

    this.postList = postService.postList;
  }

  ngOnInit(): void {
  }

  get postControl() {
    return this.postForm.controls;
  }

  addPost() {
    const post: Post = {
      id: this.counter + 1,
      title: this.postControl.postTitle.value,
      content: this.postControl.postDetails.value,
    };

    this.postService.addPost(post);
  }
}
