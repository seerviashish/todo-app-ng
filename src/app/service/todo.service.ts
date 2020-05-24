import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../type/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // tslint:disable-next-line: variable-name
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([
    { id: 1, value: 'Please Add Todo...', isCompleted: false },
  ]);

  readonly todos$ = this._todos.asObservable();

  constructor() {}

  get todos(): Todo[] {
    return this._todos.getValue();
  }

  set todos(val: Todo[]) {
    this._todos.next(val);
  }

  getTodos() {
    console.log(this.todos);
    return this.todos;
  }

  addTodo(todoValue: string) {
    const todoId: number = this.getMaxIndex() + 1;
    console.log('add: todoId ==> ', todoId);
    this.todos = [
      ...this.todos,
      { id: this.todos.length + 1, value: todoValue, isCompleted: false },
    ];
    console.log('add: after ==> ', this.todos);
  }

  private getMaxIndex(): number {
    let index = 0;
    this.todos.forEach((todo) => {
      if (index < todo.id) {
        index = todo.id;
      }
    });
    return index;
  }

  delete(todoId: number): void {
    this.todos = this.todos.filter((data) => data.id !== todoId);
  }

  updateTodo(action: string, todoId: number): void {
    if (action === 'complete') {
      this.todos = this.todos.map((data) => {
        if (data.id === todoId) {
          data.isCompleted = true;
        }
        return data;
      });
    } else if (action === 'uncomplete') {
      this.todos = this.todos.map((data) => {
        if (data.id === todoId) {
          data.isCompleted = false;
        }
        return data;
      });
    }
  }
}
