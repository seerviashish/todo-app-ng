import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input()
  public todoItem;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  deleteTodo(todoId: number) {
    this.todoService.delete(todoId);
  }

  completeTodo(todoId: number) {
    this.todoService.updateTodo('complete', todoId);
  }

  unCompleteTodo(todoId: number) {
    this.todoService.updateTodo('uncomplete', todoId);
  }
}
