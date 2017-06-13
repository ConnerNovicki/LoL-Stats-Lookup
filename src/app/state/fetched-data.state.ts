export interface State {
  championData: any;
  summonerData: any;
  masteryData: any;
  matchListDataShort: any;
  matchListDataLong: Array<any>;
}

export const INITIAL_STATE = {
  championData: {},
  summonerData: {},
  masteryData: {},
  matchListDataShort: {},
  matchListDataLong: []
}
