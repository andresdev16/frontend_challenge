
// states for people data

export interface PeopleState {
  people_content?: any;
  error?: any;
  loading?: boolean;
}

export const initialPeopleState: PeopleState = {
  people_content: [],
  loading: false,
};
