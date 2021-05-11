import { Action, createReducer, on } from "@ngrx/store";
import { CounterComponent } from "../components/counter/counter.component";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number
}

const initialState: CounterState = {
  current: 0
}

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + 1 })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - 1 })),
  on(actions.countReset, (state) => ({ ...state, current: 0 }))
)

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}
