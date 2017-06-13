import _ from 'lodash';
import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from 'app/state';
import { InitiateStatsFetch } from 'app/actions/stats-display.actions';
import { State as FetchedDataState } from 'app/state/fetched-data.state';

@Component({
  selector: 'app-stats-display-container',
  templateUrl: './stats-display-container.component.html',
  styleUrls: ['./stats-display-container.component.css']
})
@Injectable()
export class StatsDisplayContainerComponent implements OnInit {

  _data: any;

  summonerName: string = "Cano";
  championName: string = "Veig";
  championTitle: string = "The Bringer of Evil"
  masteryScore: number = 200349;
  gamesPlayed: number = 42;
  chestEarned: boolean = false;
  championLevel: number = 4;
  tokensEarned: number = 2;

  constructor(
    private store_: Store<AppState>,
    private router: Router
  ) {
    store_.select('fetchedData')
      .subscribe((data: FetchedDataState) => {
        this._data = data;
        const { summonerData, championData, masteryData, matchListDataShort } = data;

        this.summonerName = summonerData.name;
        this.championName = championData.name;
        this.championTitle = championData.title;
        this.masteryScore = masteryData.championPoints;
        this.gamesPlayed = matchListDataShort.length;
        this.chestEarned = masteryData.chestGranted;
        this.championLevel = masteryData.championLevel;
        this.tokensEarned = masteryData.tokensEarned;
      })
  }

  ngOnInit() {

    if (_.isEmpty(this._data.summonerData) || _.isEmpty(this._data.championData)) {
      this.router.navigate(['/input-form']);
      return;
    }

    this.store_.dispatch(new InitiateStatsFetch());
  }

  showData() {
    console.log(this._data);
  }

}
