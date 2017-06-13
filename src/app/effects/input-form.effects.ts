import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'app/state';
import { INPUT_FORM_ACTIONS,
  ValidateSummonerInput,
  ValidateChampionInput
} from 'app/actions/input-form.actions';

import { api_getSummoner, api_getChampions } from 'app/config/api_paths';

@Injectable()
export class InputFormEffects {
  constructor(
    private actions$: Actions,
    private _store: Store<AppState>,
    private http: Http
  ) { }

  @Effect() validateInput = this.actions$
    .ofType(INPUT_FORM_ACTIONS.VALIDATE_INPUT)
    .mergeMap(() => {
      return [
        new ValidateSummonerInput(),
        new ValidateChampionInput()
      ]
    })

  @Effect() validateSummonerInput = this.actions$
    .ofType(INPUT_FORM_ACTIONS.VALIDATE_SUMMONER)
    .withLatestFrom(this._store, (action, state) => state)
    .map(data => data.inputForm.summonerInput)
    .switchMap(summonerName => {
      return this.http.get(api_getSummoner(summonerName))
        .map(data =>{
          return ({ type: INPUT_FORM_ACTIONS.VALIDATE_SUMMONER_SUCCESS, payload: data.json() })
        })
        .catch(error =>
          Observable.of({ type: INPUT_FORM_ACTIONS.VALIDATE_SUMMONER_FAILURE, payload: summonerName })
        )
    })

    @Effect() validateChampionInput = this.actions$
      .ofType(INPUT_FORM_ACTIONS.VALIDATE_CHAMPION)
      .withLatestFrom(this._store, (action, state) => state)
      .map(data => data.inputForm.championInput.toLowerCase().trim())
      .switchMap(champInputted =>
        this.http.get(api_getChampions())
          .map(data => {
            const champs = data.json().data
            var champNames = [];
            for (var champ in champs) {
              champNames.push(champs[champ]);
            }
            const foundChamp = champNames.filter(champ => champ.name.toLowerCase().trim() === champInputted)
            return foundChamp.length === 1 ?
              { type: INPUT_FORM_ACTIONS.VALIDATE_CHAMPION_SUCCESS, payload: foundChamp[0] } :
              { type: INPUT_FORM_ACTIONS.VALIDATE_CHAMPION_FAILURE, payload: champInputted }
          })
      )

}
