import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-ng';
  todoItems = [];
  public drawerOpen = false;
  constructor(public dialog: MatDialog, private _todoService: TodoService) {}

  ngOnInit(): void {
    this.todoItems = this._todoService.getTodos();
  }

  openDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
  openDialog() {
    this.dialog.open(TodoFormComponent);
  }
}
