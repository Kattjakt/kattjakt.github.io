import { provideRouter, RouterConfig } from '@angular/router';

import { GalleryComponent } from './+gallery/gallery.component';
import { ProjectsComponent } from './+projects/projects.component';

const routes: RouterConfig = [
  {
    path: 'gallery',
    redirectTo: 'gallery/1',
    pathMatch : 'full'
  },
  {
    path: 'gallery/:id',
    component: GalleryComponent,
    pathMatch : 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    redirectTo: 'gallery',
    pathMatch : 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
