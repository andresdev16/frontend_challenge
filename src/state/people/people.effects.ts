import { PeopleState } from './people.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as peopleActions from './people.actions';

import { HttpClient } from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class PeopleEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect () getPeople$: Observable<Action> = this.actions$.ofType(peopleActions.GET_PEOPLE)
    .pipe(
      switchMap(() => {
        // Add a recursive function to deal with arrays over 10 items.
        return this.http.get('https://swapi.dev/api/people').pipe(
          map(data => new peopleActions.GetPeopleSuccessAction({people_content :  data})),
          catchError(error => of(new peopleActions.GetPeopleFailureAction(error)))
        );
      })
    );
}
