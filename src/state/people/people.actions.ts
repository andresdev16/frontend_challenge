import { Action } from '@ngrx/store';

// Constants
export const GET_PEOPLE = 'GET_PEOPLE_CONTENT';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_CONTENT_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_CONTENT_FAILURE';


// Action to start request and setting loading status on
export class GetPeopleAction implements Action {
  readonly type = GET_PEOPLE;
}
// Action to check request was successful
export class GetPeopleSuccessAction implements Action {
  readonly type = GET_PEOPLE_SUCCESS;
  constructor(public payload: {people_content: any; error?: {} }) {}
}

// Action for failure to People receive data
export class GetPeopleFailureAction implements Action {
  readonly type = GET_PEOPLE_FAILURE;
  constructor(public payload: {error?: {}, loading?: any}) {}
}

// Exporting all types for reducer to access
// Allows for strict typescript rules for the reducer
// Helpful after removal of payload from action
export type PeopleActions = GetPeopleAction | GetPeopleSuccessAction | GetPeopleFailureAction;
