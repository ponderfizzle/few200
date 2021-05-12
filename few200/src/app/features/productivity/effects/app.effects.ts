import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import * as appActions from '../../../actions/app.actions';
import * as todoActions from '../actions/todos.actions'

@Injectable()
export class AppEffects {

  // applicationStared -> LoadTodos

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => todoActions.loadTodos())
    ))

  // addTodoFailed => appAction.displayErrorMessage
  constructor(private actions$: Actions) { }
}
