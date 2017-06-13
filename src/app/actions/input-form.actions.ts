import { Action } from '@ngrx/store';

export const INPUT_FORM_ACTIONS = {
  MAKE_SUMMONER_INPUT_EDITABLE: '[input-form] Make Summoner Input Editable',
  MAKE_CHAMPION_INPUT_EDITABLE: '[input-form] Make Champion Input Editable',
  SOFT_RESET_INPUT_FORM: '[input-form] Soft Reset InputForm',
  UPDATE_SUMMONER_INPUT: '[input-form] Update Summoner Input',
  UPDATE_CHAMPION_INPUT: '[input-form] Update Champion Input',
  VALIDATE_INPUT: '[input-form] Validate Input',
  VALIDATE_SUMMONER: '[input-form] Validate Summoner',
  VALIDATE_SUMMONER_SUCCESS: '[input-form] Validate Summoner Success',
  VALIDATE_SUMMONER_FAILURE: '[input-form] Validate Summoner Failure',
  VALIDATE_CHAMPION: '[input-form] Validate Champion',
  VALIDATE_CHAMPION_SUCCESS: '[input-form] Validate Champion Success',
  VALIDATE_CHAMPION_FAILURE: '[input-form] Validate Champion Failure',
}

export class MakeSummonerInputEditable implements Action {
  readonly type = INPUT_FORM_ACTIONS.MAKE_SUMMONER_INPUT_EDITABLE;
}

export class MakeChampionInputEditable implements Action {
  readonly type = INPUT_FORM_ACTIONS.MAKE_CHAMPION_INPUT_EDITABLE;
}

export class SoftResetInputForm implements Action {
  readonly type = INPUT_FORM_ACTIONS.SOFT_RESET_INPUT_FORM;
}

export class UpdateSummonerInput implements Action {
  readonly type = INPUT_FORM_ACTIONS.UPDATE_SUMMONER_INPUT;

  constructor(public payload: string) {}
}

export class UpdateChampionInput implements Action {
  readonly type = INPUT_FORM_ACTIONS.UPDATE_CHAMPION_INPUT;

  constructor(public payload: string) {}
}

export class ValidateInput implements Action {
  readonly type = INPUT_FORM_ACTIONS.VALIDATE_INPUT;
}
//
export class ValidateSummonerInput implements Action {
  readonly type = INPUT_FORM_ACTIONS.VALIDATE_SUMMONER;
}
//
export class ValidateChampionInput implements Action {
  readonly type = INPUT_FORM_ACTIONS.VALIDATE_CHAMPION;
}
