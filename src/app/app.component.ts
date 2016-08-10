import { Component }         from '@angular/core';
import { SidebarComponent }  from './+sidebar/sidebar.component';
import { GalleryComponent }  from './+gallery/gallery.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, GalleryComponent, SidebarComponent]
})
export class AppComponent {
  isLoaded = false;

  constructor () {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
