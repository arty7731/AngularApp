import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/users/user.module';
import { AlbumModule } from './modules/albums/album.module';
import { CommentModule } from './modules/comments/comment.module';
import { PhotoModule } from './modules/photos/photo.module';
import { PostModule } from './modules/posts/post.module';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { PhotosService } from './services/photos.service';
import { CommentsService } from './services/comments.service';
import { AlbumsService } from './services/albums.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    UserModule,
    AlbumModule,
    CommentModule,
    PhotoModule,
    PostModule
  ],
  providers: [
    UsersService,
    PostsService,
    PhotosService,
    CommentsService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
