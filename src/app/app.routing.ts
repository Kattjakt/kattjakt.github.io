import { provideRouter, RouterConfig } from '@angular/router';

import { GalleryComponent } from './+gallery/gallery.component';
import { PhotoComponent } from './+photo/photo.component';

const routes: RouterConfig = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch : 'full'
    //component: PhotoComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
