export interface CharacterState {
  query?: string;
  character_content?: any;
  error?: any;
  loading?: boolean;
}

export const initialCharacterState: CharacterState = {
  character_content: [],
  loading: false
};
