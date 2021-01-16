import { Action } from "@ngrx/store"

//Constants
export const GET_CHARACTER = 'GET_CHARACTER';
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_CONTENT_SUCCESS';
export const GET_CHARACTER_FAILURE = 'GET_CHARACTER_CONTENT_FAILURE';


// Action for get characters from URL
export class GetCharacterAction implements Action {
  readonly type = GET_CHARACTER;
  constructor(public payload: {query?: string}) {}
}

//Action to check GetCharacter was succesful
export class GetCharacterSuccessAction implements Action {
  readonly type = GET_CHARACTER_SUCCESS;
  constructor(public payload: {character_content?: any, error?: {} }){}
}

//Action to check if GetCharacter was failure
export class GetCharacterFailureAction implements Action {
  readonly type = GET_CHARACTER_FAILURE;
  constructor(public payload: {error?: {}, loading?: any}){}
}

export type CharacterActions = GetCharacterAction | GetCharacterSuccessAction | GetCharacterFailureAction;
