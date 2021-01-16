import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FilmState  } from '../../state/films/films.state';
import * as FilmActions from '../../state/films/films.actions';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  // Set up Variables
  films$: Observable<any>;
  categoryContent: any;
  films_content: any;
  constructor( private store: Store<FilmState>) {
    this.films$ = this.store;

    // Subscribe to get all data and extract people data out
    // TODO: As an enhancement only select relevant parts of the store
    this.films$.subscribe((data) => {
      this.films_content = data.film;
    });
    this.store.dispatch(
      new FilmActions.GetFilmsAction()
    );
  }

  ngOnInit() {
  }

}




