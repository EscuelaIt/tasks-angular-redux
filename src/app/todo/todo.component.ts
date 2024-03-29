import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.state';
import { Todo } from './../../redux/todo/todo.model';
import { TodoRemoveAction, TodoToggleAction, TodoUpdateAction } from './../../redux/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  checkField: FormControl;
  textField: FormControl;

  editing: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
    .subscribe((value) => {
      const action = new TodoToggleAction(this.todo.id);
      this.store.dispatch(action);
    });

    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  deleteTodo() {
    const action = new TodoRemoveAction(this.todo.id);
    this.store.dispatch(action);
  }

  updateText() {
    const action = new TodoUpdateAction(this.todo.id, this.textField.value);
    this.store.dispatch(action);
  }

  activeEditMode() {
    this.editing = true;
  }

}
