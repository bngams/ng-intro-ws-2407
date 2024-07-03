import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // http://localhost:4200/home
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(result => result.ProductModule) },
  // http://localhost:4200 to http://localhost:4200/home
  { path: '', redirectTo: '/home', pathMatch:'full' },
  // /!\ ** = intercept all possible patterns (put at the end of routes array)
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
