import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor() {}
  todo = new FormControl('', [Validators.required]);
  ngOnInit(): void {}
  addTodo() {
    console.log(this.todo.value);
  }
  getErrorMessage() {
    return this.todo.hasError('required') ? 'Please enter a todo.' : '';
  }
}
