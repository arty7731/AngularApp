import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InfoUserComponent } from './components/info-user/info-user.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: InfoUserComponent },
  { path: 'user/:id/posts',
      loadChildren: () => import('../posts/post.module').then(m => m.PostModule) },
  { path: 'user/:id/albums',
    loadChildren: () => import('../albums/album.module').then(m => m.AlbumModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
