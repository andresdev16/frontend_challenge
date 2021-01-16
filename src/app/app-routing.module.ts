import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Component imports
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FilmsComponent} from './films/films.component';
import {PeopleComponent} from './people/people.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingPageComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})


export class AppRoutingModule { }
