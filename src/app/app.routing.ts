import { provideRouter, RouterConfig } from '@angular/router';

import { GalleryComponent } from './+gallery/gallery.component';
import { ProjectsComponent } from './+projects/projects.component';

const routes: RouterConfig = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch : 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
