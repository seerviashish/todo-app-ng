import { Component, OnInit } from '@angular/core';
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
  public drawerOpen = false;
  constructor(public dialog: MatDialog, public todoService: TodoService) {}

  openDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
  openDialog() {
    this.dialog.open(TodoFormComponent);
  }
}
