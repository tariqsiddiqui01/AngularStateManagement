// // import the interface
import { CountryItem } from '../models/countryItem.model';
import { CountryAction, CountryActionType } from '../actions/country.action';
// //create a dummy initial state

const initialState: Array<CountryItem> = [
  {
    id: '1',
    name: 'United States of America',
    shortName: 'US',
  },
];

export function CountryReducer(
  state: Array<CountryItem> = initialState,
  action: CountryAction
) {
  switch (action.type) {
    case CountryActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
