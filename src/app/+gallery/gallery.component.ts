import { Component }      from '@angular/core';
import { Photo }          from '../models/photo.model';
import { Manager }        from '../services/manager.service';
import { PhotoComponent } from '../+photo/photo.component';

@Component({
  moduleId: module.id,
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  directives: [PhotoComponent],
  providers: [Manager]
})
export class GalleryComponent {
  photos: Photo[];
  current: Photo;
  index: number;

  constructor (manager: Manager) {
    this.photos = manager.getPhotos();
    this.index = 0;

    this.current = this.photos[this.index];
  }

  next () {
    if (this.index === this.photos.length - 1) {
      return;
    }

    this.index++;
    console.info('next')
  }

  previous () {
    if (this.index === 0) {
      return;
    }

    this.index--;
    console.info('previous')
  }
}
