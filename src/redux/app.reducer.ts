import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { todosReducer } from './todo/todo.reducer';

export const AppReducer: ActionReducerMap<AppState>  = {
  todos: todosReducer,
};
