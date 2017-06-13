import { Action } from '@ngrx/store';

export const FETCHED_DATA_ACTIONS = {
  GET_MASTERY_DATA: '[stats-display] Get Mastery Data',
  SAVE_MASTERY_DATA: '[fetched-data] Save Mastery Data',
  DONE_FETCHING_GAMES: '[fetched-data] Done Fetching Data',
  FAILED_REQUEST: '[fetched-data] Failed Request',
  GET_MATCHES_FOR_CHAMPION: '[fetched-data] Get Matches For Champion',
  SAVE_MATCHES_FOR_CHAMPION: '[fetched-data] Save Matches For Champion',
  SAVE_DATA_FOR_MATCH: '[fetched-data] Save Data For Match',
  GET_ALL_MATCH_DATA: '[fetched-data] Get All Match Data',
  GET_DATA_FOR_MATCH: '[fetched-data] Get Data For Match'
}

export class FailedRequest implements Action {
  readonly type = FETCHED_DATA_ACTIONS.FAILED_REQUEST;

  constructor() { console.log('failed request') }
}

export class GetMasteryData implements Action {
  readonly type = FETCHED_DATA_ACTIONS.GET_MASTERY_DATA;

  constructor(public payload: {summonerId: number, championId: number}) { }
}

export class SaveMasteryData implements Action {
  readonly type = FETCHED_DATA_ACTIONS.SAVE_MASTERY_DATA;

  constructor(public payload: any) { }
}

export class GetMatchesForChampion implements Action {
  readonly type = FETCHED_DATA_ACTIONS.GET_MATCHES_FOR_CHAMPION;

  constructor(public payload: {accountId: number, championId: number}) { }
}

export class SaveMatchesForChampion implements Action {
  readonly type = FETCHED_DATA_ACTIONS.SAVE_MATCHES_FOR_CHAMPION;

  constructor(public payload: any) { }
}

export class GetAllMatchData implements Action {
  readonly type = FETCHED_DATA_ACTIONS.GET_ALL_MATCH_DATA;

  constructor(public payload: { matchList: any }) { }
}

export class GetDataForMatch implements Action {
  readonly type = FETCHED_DATA_ACTIONS.GET_DATA_FOR_MATCH;

  constructor(public payload: { matchId: any }) { }
}

export class SaveDataForMatch implements Action {
  readonly type = FETCHED_DATA_ACTIONS.SAVE_DATA_FOR_MATCH;

  constructor(public payload: { gameData: any }) { }
}

export class DoneFetchingGames implements Action {
  readonly type = FETCHED_DATA_ACTIONS.DONE_FETCHING_GAMES;

  constructor() { console.log('Done fetching game data long') }
}
