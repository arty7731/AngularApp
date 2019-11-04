import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InfoUserComponent } from './components/info-user/info-user.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id/user', component: InfoUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
