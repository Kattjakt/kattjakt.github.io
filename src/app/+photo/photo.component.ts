import { Component, Input } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  moduleId: module.id,
  selector: 'photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
})
export class PhotoComponent {
  @Input() data: Photo;
}
