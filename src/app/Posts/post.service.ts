import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      title: 'First post title',
      description: 'First post description'
    },
    {
      title: 'Second post title',
      description: 'Second post description'
    },
    {
      title: 'Third post title',
      description: 'Third post description'
    }
  ];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  CreatePosts(post) {
     return this.posts.push(post);
  }
}
