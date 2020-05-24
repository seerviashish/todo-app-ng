import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-ng';
  todoItems = [{ id: 1, value: 'Todo 1', isCompleted: false }];
  public drawerOpen = false;
  constructor(public dialog: MatDialog) {}
  openDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
  openDialog() {
    this.dialog.open(TodoFormComponent);
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
