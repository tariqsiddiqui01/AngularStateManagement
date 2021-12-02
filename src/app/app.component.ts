import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryItem } from './store/models/countryItem.model';
import { AppState } from './store/models/app-state.model';
import { NgForm } from '@angular/forms';
import { AddItemAction } from './store/actions/country.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countryItems$: Observable<Array<CountryItem>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.countryItems$ = this.store.select((store) => store.country);
  }

  addCountry(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
}
