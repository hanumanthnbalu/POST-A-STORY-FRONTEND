import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }


}
