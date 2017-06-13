import { Action, ActionReducer } from '@ngrx/store';
import { INPUT_FORM_ACTIONS } from 'app/actions/input-form.actions';
import { FETCHED_DATA_ACTIONS } from 'app/actions/fetched-data.actions';
import { INITIAL_STATE, State } from 'app/state/fetched-data.state';

export const FetchedDataReducer: ActionReducer<State> = (state = INITIAL_STATE, action: Action) => {
  const { type, payload } = action;

  switch ( type ) {

    case INPUT_FORM_ACTIONS.VALIDATE_SUMMONER_SUCCESS:
      return { ...state, summonerData: payload }

    case INPUT_FORM_ACTIONS.VALIDATE_CHAMPION_SUCCESS:
      return { ...state, championData: payload }

    case FETCHED_DATA_ACTIONS.SAVE_MASTERY_DATA:
      return { ...state, masteryData: payload }

    case FETCHED_DATA_ACTIONS.SAVE_MATCHES_FOR_CHAMPION:
      return { ...state, matchListDataShort: payload }

    case FETCHED_DATA_ACTIONS.FAILED_REQUEST:
      console.log('Failed request');
      return state;

    case FETCHED_DATA_ACTIONS.SAVE_DATA_FOR_MATCH:
      return { ...state, matchListDataLong: [ ...state.matchListDataLong, payload.gameData ]}

    default:
      return state;
  }
}
