import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.state';

import { SetFilterAction } from './../../redux/filter/filter.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  doFilter( filter: string) {
    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

}
