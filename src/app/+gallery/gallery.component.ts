import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo }          from '../models/photo.model';
import { Manager }        from '../services/manager.service';
import { PhotoComponent } from '../+photo/photo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
  directives: [PhotoComponent],
  providers: [Manager]
})
export class GalleryComponent implements OnInit, OnDestroy {
  photos: Photo[];
  current: Photo;
  index: number;
  sub: any;

  constructor (manager: Manager, private route: ActivatedRoute, private router: Router) {
    this.photos = manager.getPhotos();
    this.index = 0;

    this.current = this.photos[this.index];
  }

  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      if (id <= 0 || id >= this.photos.length) {
        this.router.navigate(['gallery']);
        return;
      }

      this.index = id;
    })
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

  next () {
    if (this.index === this.photos.length - 1) {
      return;
    } else {
      this.router.navigate(['gallery/' + (this.index + 1)]);
    }
  }

  previous () {
    if (this.index === 0) {
      return;
    } else {
      this.router.navigate(['gallery/' + (this.index - 1)]);
    }
  }
}
