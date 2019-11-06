import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  @Input() userId: number
  user: UserModel

  constructor(private activateRoute: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit() {   
    this.userId = this.activateRoute.snapshot.params["id"];
    if(this.userId){
      this.userService.getUser(this.userId)
        .subscribe(user => this.user = user);
    }
  }

  ngOnChanges(): void {
    console.log('changes')
    if(this.userId){
      this.userService.getUser(this.userId)
        .subscribe(user => this.user = user);
    }
  }
}
