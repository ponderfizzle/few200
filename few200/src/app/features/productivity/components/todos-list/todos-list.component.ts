import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListModel } from '../../models';
import { ProductivityState, selectTodoListItemModel } from '../../reducers';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {


  model$: Observable<TodoListModel>;

  // model: TodoListModel = {
  //   list: [
  //     { id: '1', description: 'Feed Cat', completed: false },
  //     { id: '2', description: 'Buy Tacos', project: 'Home', completed: false },
  //     { id: '3', description: 'Clean Garage', project: 'Work', completed: false },
  //   ],
  //   summary: {
  //     complete: 10,
  //     incomplete: 8,
  //     totalTodos: 18
  //   }
  // }

  constructor(private store: Store<ProductivityState>) { }

  ngOnInit(): void {
    this.model$ = this.store.select(selectTodoListItemModel);
  }

}
