import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class AddPostComponent {
  title: string = '';
  content: string = '';

  constructor(private blogService: BlogService) {}

  onAddPost() {
    const post = {
      id: Math.random(),
      title: this.title,
      content: this.content
    };
    this.blogService.addPost(post);
    this.title = '';
    this.content = '';
  }
}
