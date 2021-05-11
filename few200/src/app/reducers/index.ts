import * as fromCounter from './counter.reducer';

// this is for TypeScript.  It just lets it know what is going on.  None of this
export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.reducer
}
