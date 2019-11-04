import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from '../posts/post.module';
import { AlbumModule } from '../albums/album.module';


@NgModule({
  declarations: [UsersComponent, InfoUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,

    PostModule,
    AlbumModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule { }
