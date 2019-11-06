import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() userId: number
  posts: PostModel[]

  constructor(private postService: PostsService,
    private activateRoute: ActivatedRoute) {
      this.userId = this.activateRoute.snapshot.params['id'];
      console.log(this.userId);
     }

  ngOnInit() {
    this.getPosts()
  }

  ngOnChanges(): void {
    this.getPosts()
  }

  getPosts(){
    if(this.userId){
      this.postService.getUserPosts(this.userId).subscribe(posts => this.posts = posts)
    }
  }
}
