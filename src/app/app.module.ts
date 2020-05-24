import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { MaterialModule } from './material/material.module';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [TodoService],
  entryComponents: [TodoFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
