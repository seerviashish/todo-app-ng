import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todo = new FormControl('', [Validators.required]);
  ngOnInit(): void {}
  getErrorMessage() {
    return this.todo.hasError('required') ? 'Please enter a todo.' : '';
  }
  addTodo() {
    const todo: any = this.todo.value;
    if (todo && String(todo).trim().length > 0) {
      this.todoService.addTodo(this.todo.value);
    }
  }
}
