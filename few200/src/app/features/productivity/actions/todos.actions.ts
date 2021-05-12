import { createAction, props } from "@ngrx/store";
import { TodoEntity } from "../reducers/todos.reducer";

export const loadTodos = createAction(
  '[productivity todos] load the todos'
);

export const loadTodosSucceeded = createAction(
  '[productivity todos] loading todos succeeded',
  props<{ payload: TodoEntity[] }>()
);

export const loadTodosFailed = createAction(
  '[productivity todos] loading todos failed',
  props<{ payload: TodoEntity, message: string }>()
);

// export const addTodo = createAction(
//   '[productivity todos] add todo',
//   props<{ payload: TodoCreate }>()
// );
let fakeId = 1;
export const addTodo = createAction(
  '[productivity todos] add todo',
  ({ name, project }: TodoCreate) => ({
    payload: {
      description: name,
      completed: false,
      project,
      id: 'TEMP' + fakeId++
    } as TodoEntity
  })
);

export const addTodoSucceeded = createAction(
  '[productivity todos] adding todo succeeded',
  props<{ payload: TodoEntity, oldId: string }>()
);

export const addTodoFailed = createAction(
  '[productivity todos] adding todo failed',
  props<{ payload: TodoEntity, message: string }>()
);

interface TodoCreate {
  name: string
  project?: string
}
