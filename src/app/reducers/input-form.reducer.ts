import { Action, ActionReducer } from '@ngrx/store';
import { INPUT_FORM_ACTIONS } from 'app/actions/input-form.actions';
import { INITIAL_STATE, State } from 'app/state/input-form.state';

export function InputFormReducer(state = INITIAL_STATE, action: Action) {
  const { type, payload } = action;

  switch ( type ) {

    case INPUT_FORM_ACTIONS.UPDATE_SUMMONER_INPUT:
      return { ...state, summonerInput: payload, hasTriedValidation: false };

    case INPUT_FORM_ACTIONS.UPDATE_CHAMPION_INPUT:
      return { ...state, championInput: payload, hasTriedValidation: false };

    case INPUT_FORM_ACTIONS.VALIDATE_SUMMONER:
      return { ...state, isValidatingSummoner: true, hasTriedValidation: true };

    case INPUT_FORM_ACTIONS.VALIDATE_SUMMONER_SUCCESS:
      return { ...state, isValidatingSummoner: false, isValidSummoner: true };

    case INPUT_FORM_ACTIONS.VALIDATE_SUMMONER_FAILURE:
      return { ...state, isValidatingSummoner: false };

    case INPUT_FORM_ACTIONS.VALIDATE_CHAMPION:
      return { ...state, isValidatingChampion: true, hasTriedValidation: true };

    case INPUT_FORM_ACTIONS.VALIDATE_CHAMPION_SUCCESS:
      return { ...state, isValidatingChampion: false, isValidChampion: true };

    case INPUT_FORM_ACTIONS.VALIDATE_CHAMPION_FAILURE:
      return { ...state, isValidatingChampion: false };

    case INPUT_FORM_ACTIONS.MAKE_SUMMONER_INPUT_EDITABLE:
      return { ...state, isValidSummoner: false, hasTriedValidation: false };

    case INPUT_FORM_ACTIONS.MAKE_CHAMPION_INPUT_EDITABLE:
      return { ...state, isValidChampion: false, hasTriedValidation: false };

    case INPUT_FORM_ACTIONS.SOFT_RESET_INPUT_FORM:
      return { ...state, isValidChampion: false, isValidSummoner: false, hasTriedValidation: false }

    default:
      return state;
  }
}
