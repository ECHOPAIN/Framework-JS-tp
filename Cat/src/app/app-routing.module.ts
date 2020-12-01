import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CreateCatComponent } from './create-cat/create-cat.component'

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'createCat', component : CreateCatComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateCatComponent]
