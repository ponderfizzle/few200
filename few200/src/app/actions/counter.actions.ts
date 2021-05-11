import { createAction } from '@ngrx/store';



export const countIncremented = createAction(
  'increment'
)

export const countDecremented = createAction(
  'decrement'
)

export const countReset = createAction(
  'reset'
)
