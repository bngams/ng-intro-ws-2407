import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  // http://localhost:4200/home
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  // http://localhost:4200
  { path: '', redirectTo: '/home', pathMatch:'full' },
  // /!\ ** = tout
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
