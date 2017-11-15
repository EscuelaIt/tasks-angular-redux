import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
