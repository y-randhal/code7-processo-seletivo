import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDescriptionComponent } from './app-description/app-description.component';
import { AppErrorComponent } from './app-error/app-error.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: 'movies-list', component: MoviesListComponent },
  { path: 'app-description', component: AppDescriptionComponent },
  { path: '',   redirectTo: '/movies-list', pathMatch: 'full' },
  { path: '**', component: AppErrorComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
