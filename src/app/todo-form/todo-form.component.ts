import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  getErrorMessage() {
    return this.todo.hasError('required') ? 'Please enter a todo.' : '';
  }
  addTodo() {
    console.log('Todo--> ', this.todo.value);
  }
}
