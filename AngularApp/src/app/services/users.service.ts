import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl)
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${id}`)
  }
}
