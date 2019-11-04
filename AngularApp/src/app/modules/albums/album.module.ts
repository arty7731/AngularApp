import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';


@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ],
  exports:[
    AlbumsComponent
  ]
})
export class AlbumModule { }
