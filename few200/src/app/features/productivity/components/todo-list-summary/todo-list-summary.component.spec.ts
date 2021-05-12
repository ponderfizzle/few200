import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSummaryComponent } from './todo-list-summary.component';

describe('TodoListSummaryComponent', () => {
  let component: TodoListSummaryComponent;
  let fixture: ComponentFixture<TodoListSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
