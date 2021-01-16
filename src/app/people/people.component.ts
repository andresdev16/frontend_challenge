import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { PeopleState  } from '../../state/people/people.state';
import * as peopleActions from '../../state/people/people.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people$: Observable<any>;
  categoryContent: any;
  people_content: any;

  constructor( private store: Store<PeopleState>) {
    this.people$ = this.store;
    // Subscribe to get all data and extract people data out
    // TODO: As an enhancement only select relevant parts of the store
    this.people$.subscribe((data) => {
      this.people_content = data.people;
    });
    // Dispatch action to get loading screen (well... text) and receive data
    this.store.dispatch(
      new peopleActions.GetPeopleAction()
    );
  }

  ngOnInit() {
  }

}




