import { FilmState } from './films.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as filmActions from './films.actions';

import { HttpClient } from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class FilmEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  // Effect to get film data from swapi.com
  // Using newer pipe rxjs methods so will need to use catchError
  @Effect () getFilms$: Observable<Action> = this.actions$.ofType(filmActions.GET_FILMS)
    .pipe(
      switchMap(() => {
        return this.http.get('https://swapi.dev/api/films').pipe(
          map(data => new filmActions.GetFilmsSuccessAction({films_content :  data})),
          catchError(error => of(new filmActions.GetFilmsFailureAction(error)))
        );
      })
    );
}
