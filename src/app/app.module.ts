import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FilmsComponent } from './films/films.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import {PeopleComponent} from './people/people.component';

// Reducers
import { FilmsReducer } from '../state/films/films.reducer';
import { PeopleReducer} from '../state/people/people.reducer';

// Effects
import { PeopleEffects} from '../state/people/people.effects';
import { FilmEffects } from '../state/films/films.effects';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FilmsComponent,
    NavComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(({ film: FilmsReducer, people: PeopleReducer })),
    EffectsModule.forRoot([ FilmEffects, PeopleEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
