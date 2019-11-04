import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotosComponent } from './components/photos/photos.component';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  exports: [
    PhotosComponent
  ]
})
export class PhotoModule { }
