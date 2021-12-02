import { Action } from '@ngrx/store';
import { CountryItem } from '../models/countryItem.model';

export enum CountryActionType {
  ADD_ITEM = '[COUNTRY] Add Country',
}

export class AddItemAction implements Action {
  readonly type = CountryActionType.ADD_ITEM;

  constructor(public payload: CountryItem) {}
}

export type CountryAction = AddItemAction;
