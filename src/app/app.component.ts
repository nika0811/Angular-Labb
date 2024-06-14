import { Component } from '@angular/core';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    AddPostComponent,
    PostListComponent,
    RouterModule,
    
  ]
})
export class AppComponent {
  title = 'blog-app';
}
