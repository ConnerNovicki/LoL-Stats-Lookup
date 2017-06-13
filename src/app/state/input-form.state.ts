export interface State {
  summonerInput: string;
  championInput: string;
  hasTriedValidation: boolean;
  isValidatingSummoner: boolean;
  isValidatingChampion: boolean;
  isValidSummoner: boolean;
  isValidChampion: boolean;
}

export const INITIAL_STATE = {
  summonerInput: '',
  championInput: '',
  hasTriedValidation: false,
  isValidatingSummoner: false,
  isValidatingChampion: false,
  isValidSummoner: false,
  isValidChampion: false
}
