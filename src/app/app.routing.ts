import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { BlendokuComponent }   from './blendoku/blendoku.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blendoku',
    component: BlendokuComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);