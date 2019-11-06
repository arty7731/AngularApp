import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { InfoPostComponent } from './components/info-post/info-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CommentModule } from '../comments/comment.module';


@NgModule({
  declarations: [PostsComponent, InfoPostComponent, AddPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommentModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostModule { }
