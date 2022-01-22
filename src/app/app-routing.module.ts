import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstantfundingComponent } from './instantfunding/instantfunding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'instantfunding', component: InstantfundingComponent
  },
  { 
    path: 'home', component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
