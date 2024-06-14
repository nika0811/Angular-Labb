import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
