import { CountryItem } from './countryItem.model';

export interface AppState {
  readonly country: Array<CountryItem>;
}
