import { createAction, props } from '@ngrx/store';



export const countIncremented = createAction(
  'increment'
)

export const countDecremented = createAction(
  'decrement'
)

export const countReset = createAction(
  'reset'
)

export const counterCountBySet = createAction('[app counter] count by', props<{ by: number }>())

export const loadCountBy = createAction(
  '[app counter] load saved count by'
);


