import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';

import { AppState } from 'app/state';
import {
  DoneFetchingGames,
  FailedRequest,
  SaveMasteryData,
  SaveMatchesForChampion,
  SaveDataForMatch,
  GetAllMatchData,
  GetDataForMatch,
  FETCHED_DATA_ACTIONS } from 'app/actions/fetched-data.actions';

import {
  api_getMasteryData,
  api_getMatchesForChamp,
  api_getMatchData
} from 'app/config/api_paths';

@Injectable()
export class FetchedDataEffects {
  constructor(
    private actions$: Actions,
    private _store: Store<AppState>,
    private http: Http
  ) { }

  @Effect() getMasteryData = this.actions$
    .ofType(FETCHED_DATA_ACTIONS.GET_MASTERY_DATA)
    .map(action => ({ summonerId: action.payload.summonerId, championId: action.payload.championId }))
    .switchMap(({summonerId, championId}) =>
      this.http.get(api_getMasteryData(summonerId, championId))
        .map((response: any) =>
          ( new SaveMasteryData(response.json()) )
      )
    )

  @Effect() getMatchesForChampion = this.actions$
    .ofType(FETCHED_DATA_ACTIONS.GET_MATCHES_FOR_CHAMPION)
    .map(action => ({ accountId: action.payload.accountId, championId: action.payload.championId }))
    .switchMap(({ accountId, championId }) =>
      this.http.get(api_getMatchesForChamp(accountId, championId))
        .map(response => response.json().matches)
        .mergeMap(matchList => [
          new SaveMatchesForChampion(matchList)
          // new GetAllMatchData({ matchList })
        ])
    )
  //
  // @Effect() getAllMatchData = this.actions$
  //   .ofType(FETCHED_DATA_ACTIONS.GET_ALL_MATCH_DATA)
  //   .map(action => action.payload.matchList)
  //   .switchMap(matchList => {
  //     matchList
  //     .map(match => match.gameId)
  //     .forEach(id => {
  //       this._store.dispatch(new GetDataForMatch({ matchId: id }))
  //     })
  //     return Observable.of(new DoneFetchingGames())
  //     })
  //
  //
  // @Effect() getDataForMatch = this.actions$
  //   .ofType(FETCHED_DATA_ACTIONS.GET_DATA_FOR_MATCH)
  //   .map(action => ({ matchId: action.payload.matchId }) )
  //   .switchMap(payload => {
  //     return this.http.get(api_getMatchData(payload.matchId))
  //       .map((response: any) =>  ( new SaveDataForMatch({ gameData: response.json() })))
  //       .catch(error => Observable.of(new FailedRequest()))
  //   })

}
