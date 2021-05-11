import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from '../actions/counter.actions';
import { filter, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {

  //TODO: When the app starts -> read the value from localstorage
  // if it is there, dispatch an action actions.counterCountBySet()
  // if it is not there, we could dispatch counterCountBySet({by: 1})
  // or we could do nothing

  loadCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCountBy),
      map(() => localStorage.getItem('by')),
      filter(val => val !== null),
      map(val => parseInt(val, 10)),
      map(by => actions.counterCountBySet({ by })) // what comes out of here is an action and effects will send this to the store if we dispatch
    ), { dispatch: true });

  // TODO: any time counterCountBySet -> write it to local storage.

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.counterCountBySet),
      tap((action) => localStorage.setItem('by', action.by.toString()))
    ), { dispatch: false }
  )

  // logEverything$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap((action) => console.log(`Got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // )

  constructor(private actions$: Actions) { }
}
