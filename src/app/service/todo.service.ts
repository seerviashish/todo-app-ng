import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todoItems = [{ id: 1, value: 'Todo', isCompleted: false }];

  getTodos() {
    return this.todoItems;
  }

  addTodo(todoItem: string) {
    const todoId: number = this.getMaxIndex() + 1;
    this.todoItems.push({ id: todoId, value: todoItem, isCompleted: false });
  }

  private getMaxIndex(): number {
    let index = 1;
    this.todoItems.forEach((todo) => {
      if (index < todo.id) {
        index = todo.id;
      }
    });
    return index;
  }
}
