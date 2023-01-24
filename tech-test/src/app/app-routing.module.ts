import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./page-modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./page-modules/edit-page/edit-page.module').then(m => m.EditPageModule)
  },
  {
    path: 'create-page',
    loadChildren: () => import('./page-modules/create-page/create-page.module').then(m => m.CreatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
