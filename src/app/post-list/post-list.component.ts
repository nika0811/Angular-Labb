import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  onRemovePost(id: number): void {
    this.blogService.removePost(id);
    this.posts = this.blogService.getPosts();
  }
}
