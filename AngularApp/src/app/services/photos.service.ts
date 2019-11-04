import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from '../models/photo.model';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.baseUrl)
  }
}
