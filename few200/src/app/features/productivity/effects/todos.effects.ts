import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import * as actions from '../actions/todos.actions';
import { TodoEntity } from "../reducers/todos.reducer";
import { environment } from '../../../../environments/environment';

@Injectable()
export class TodoEffects {

  baseUrl = environment.apiUrl;
  // loadTodos -> (loadTodosSucceeded | loadTodosFailed)

  fakeTodos: TodoEntity[] = [
    { id: '1', description: 'Feed Cat', completed: false },
    { id: '2', description: 'Buy Tacos', project: 'Home', completed: false },
    { id: '3', description: 'Clean Garage', project: 'Work', completed: true }
  ]

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addTodo),
      switchMap(originalAction => this.client.post<TodoEntity>(this.baseUrl, {
        description: originalAction.payload.description,
        project: originalAction.payload.project
      }).pipe(
        map(response => actions.addTodoSucceeded({ payload: response, oldId: originalAction.payload.id }))
      ))
    ), { dispatch: true }
  );

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTodos),
      switchMap(() => this.client.get<GetTodosResponse>(this.baseUrl + 'todos')
        .pipe(
          map(response => response.data),
          map(payload => actions.loadTodosSucceeded({ payload }))
        )
      )
    )
  );

  constructor(private actions$: Actions) { }
}

interface GetTodosResponse {
  data: TodoEntity[]
}
