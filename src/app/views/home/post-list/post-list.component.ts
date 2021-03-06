import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/model/post.model';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: [];

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts()
  }
  
  getPosts() {
    this.postService.getPosts().subscribe((data: []) => {
      this.posts = data
    })
  }
}
