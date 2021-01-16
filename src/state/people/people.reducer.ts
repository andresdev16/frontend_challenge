import { ActionReducer, Action } from '@ngrx/store';
import * as fromFilms from './people.actions';
import { PeopleState, initialPeopleState } from './people.state';



export function PeopleReducer(state = initialPeopleState, action: fromFilms.PeopleActions): PeopleState {
  switch (action.type) {

    case fromFilms.GET_PEOPLE: {
      return {
        // Set the state of loading to true to allow a loading message
        ...state,
        loading: true,
      };
    };

    case fromFilms.GET_PEOPLE_SUCCESS: {
      return {
        // Turn loading off as data is received
        ...state,
        people_content: action.payload.people_content,
        error: action.payload.error,
        loading: false,
      };
    };

    case fromFilms.GET_PEOPLE_FAILURE: {
      return {
        // Handle errors getting people data
        ...initialPeopleState,
        error: action.payload.error,
        loading: false,
      };
    };

    default:
      return state;
  }
}
