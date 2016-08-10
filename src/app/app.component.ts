import { Component } from '@angular/core';

import { SidebarComponent } from './+sidebar/sidebar.component';
import { GalleryComponent } from './+gallery/gallery.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GalleryComponent, SidebarComponent]
})
export class AppComponent { }
