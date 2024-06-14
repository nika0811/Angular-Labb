import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';

export const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'add-post', component: AddPostComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
   ];
