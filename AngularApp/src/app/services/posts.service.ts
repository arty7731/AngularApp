import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class PostsService {
  private baseUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.baseUrl}/${id}`)
  }

  getUserPosts(userId: number): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.baseUrl}?userId=${userId}&_sort=views&_order=desc`)
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.baseUrl, post, httpOptions) 
  }
}
