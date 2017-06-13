import { Action } from '@ngrx/store';

export const STATS_DISPLAY_ACTIONS = {
  INITIATE_STATS_FETCH: '[stats-display] Initiate Stats Fetch'
}

export class InitiateStatsFetch implements Action {
  readonly type = STATS_DISPLAY_ACTIONS.INITIATE_STATS_FETCH;

  constructor() { }
}
