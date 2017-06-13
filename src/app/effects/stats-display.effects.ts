import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'app/state';
import { STATS_DISPLAY_ACTIONS } from 'app/actions/stats-display.actions';
import { GetMasteryData, GetMatchesForChampion } from 'app/actions/fetched-data.actions';

@Injectable()
export class StatsDisplayEffects {
  constructor(
    private actions$: Actions,
    private _store: Store<any>,
    private http: Http
  ) { }

  @Effect() initiateStatsFetch = this.actions$
    .ofType(STATS_DISPLAY_ACTIONS.INITIATE_STATS_FETCH)
    .withLatestFrom(this._store, (action, state) => state)
    .map(data => ({
        summonerId: Number(data.fetchedData.summonerData.id),
        championId: Number(data.fetchedData.championData.id),
        accountId: Number(data.fetchedData.summonerData.accountId)
    }))
    .mergeMap(({summonerId, championId, accountId}) =>
      [
        new GetMasteryData({ summonerId, championId }),
        new GetMatchesForChampion({ accountId, championId })
      ]
    )



}
