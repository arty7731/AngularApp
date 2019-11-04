import { Component, OnInit, Input } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { AlbumModel } from 'src/app/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  @Input() userId: number
  albums: AlbumModel[]

  constructor(private albumService: AlbumsService) { }

  ngOnInit() {
    this.albumService.getUserAlbums(this.userId).subscribe(albums => this.albums = albums)
  }

}
