import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: UserModel[]
  selectedUserId: number

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  showUserInfo(userId: number){
    this.selectedUserId = userId
    console.log(this.selectedUserId)
  }
}