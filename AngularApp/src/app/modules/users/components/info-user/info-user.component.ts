import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  id: number;
  user: UserModel

  constructor(private activateRoute: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id']
    
    this.userService.getUser(this.id)
      .subscribe(user => this.user = user);
  }


}
