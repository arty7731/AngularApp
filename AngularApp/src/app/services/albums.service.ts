import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlbumModel } from '../models/album.model';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/albums'
  constructor(private http: HttpClient) { 
    
  }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.baseUrl)
  }
}
