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

  constructor (manager: Manager) {
    this.photos = manager.getPhotos();
  }
}
