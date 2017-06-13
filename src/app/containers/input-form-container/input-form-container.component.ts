import _ from 'lodash';
import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app/state';
import { State as InputFormState } from 'app/state/input-form.state';
import { State as FetchedDataState } from 'app/state/fetched-data.state';

import {
  MakeSummonerInputEditable,
  MakeChampionInputEditable,
  SoftResetInputForm,
  UpdateSummonerInput,
  UpdateChampionInput,
  ValidateInput
} from 'app/actions/input-form.actions';

@Component({
  selector: 'app-input-form-container',
  templateUrl: './input-form-container.component.html',
  styleUrls: ['./input-form-container.component.css']
})
@Injectable()
export class InputFormContainerComponent implements OnInit {

  summonerInput: string;
  championInput: string;
  hasTriedValidation: boolean;
  isValidSummoner: boolean;
  isValidChampion: boolean;
  isValidatingSummoner: boolean;
  isValidatingChampion: boolean;

  realChampionName: string;
  realSummonerName: string;

  constructor(
    private _store: Store<AppState>
  ) {
    _store.select('inputForm')
      .subscribe((data: InputFormState) => {
        this.summonerInput = data.summonerInput;
        this.championInput = data.championInput;
        this.hasTriedValidation = data.hasTriedValidation;
        this.isValidChampion = data.isValidChampion;
        this.isValidSummoner = data.isValidSummoner;
        this.isValidatingChampion = data.isValidatingChampion;
        this.isValidatingSummoner = data.isValidatingSummoner;
      })

    _store.select('fetchedData')
      .subscribe((data: FetchedDataState) => {
        this.realChampionName = !_.isEmpty(data.championData) ? data.championData.name : null;
        this.realSummonerName = !_.isEmpty(data.summonerData) ? data.summonerData.name : null;
      })
  }

  ngOnInit() {
    this._store.dispatch(new SoftResetInputForm())
  }
  
  getChampionErrorMessage(): string {
    return this.hasTriedValidation && !this.isValidChampion ?
      "Not a valid champion." : ""
  }

  getSummonerErrorMessage(): string {
    return this.hasTriedValidation && !this.isValidSummoner ?
      "Not a valid champion." : ""
  }

  makeSummonerInputEditable() {
    this._store.dispatch(new MakeSummonerInputEditable());
  }

  makeChampionInputEditable() {
    this._store.dispatch(new MakeChampionInputEditable());
  }

  onSummonerInput(value) {
    this._store.dispatch(new UpdateSummonerInput(value));
  }

  onChampionInput(value) {
    this._store.dispatch(new UpdateChampionInput(value));
  }

  validate() {
    this._store.dispatch(new ValidateInput());
  }
}
