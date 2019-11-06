import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-info-post',
  templateUrl: './info-post.component.html',
  styleUrls: ['./info-post.component.css']
})
export class InfoPostComponent implements OnInit {

  post: PostModel

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

}
