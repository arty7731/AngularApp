import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../models/comment.model';
import { Observable } from 'rxjs';

@Injectable()
export class CommentsService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) { 

  }

  getComments(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(this.baseUrl)
  }
}
