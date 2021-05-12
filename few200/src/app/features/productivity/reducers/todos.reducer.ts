import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/todos.actions'

export interface TodoEntity {
  id: string;
  description: string;
  project?: string;
  completed: boolean;
}

export interface TodoState extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.addTodoSucceeded, (state, action) => adapter.updateOne({
    id: action.oldId,
    changes: {
      id: action.payload.id
    }
  }, state)),
  on(actions.addTodo, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadTodosSucceeded, (state, action) => adapter.setAll(action.payload, state))
);

export function reducer(state: TodoState = initialState, action: Action): TodoState {
  return reducerFunction(state, action);
}



