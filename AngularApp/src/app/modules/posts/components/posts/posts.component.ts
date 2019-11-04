import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() userId: number
  posts: PostModel[]

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getUserPosts(this.userId).subscribe(posts => this.posts = posts)
  }

}
