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
  public drawerOpen = false;
  constructor(public dialog: MatDialog) {}
  openDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
  openDialog() {
    this.dialog.open(TodoFormComponent);
  }
}
