import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../interfaces/todo';
import {EditTodoComponent} from './edit-todo/edit-todo.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  todoText: string;
  todoArray: Todo[];

  constructor(private todoService: TodoService,
              private dialog: MatDialog,
              private toast: MatSnackBar) {
    this.todoArray = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todoText);
    this.todoArray = this.todoService.getTodos();
    this.todoText = '';
    this.toast.open('Pomyślnie dodano zadanie', '', {panelClass: 'toast-success'});

  }

  removeTodo(index) {
    this.todoService.removeTodo(index);
    this.todoArray = this.todoService.getTodos();
    this.toast.open('Pomyślnie usunięto zadanie', '', {panelClass: 'toast-success'});
  }

  openModal(id, index) {
    const todo = this.todoService.getTodo(index);
    this.dialog.open(EditTodoComponent, {
      data: {
        todo,
        index
      }
    }).afterClosed().subscribe((res) => {
      this.todoArray = this.todoService.getTodos();
      this.toast.open('Pomyślnie zaktualizowano zadanie', '', {panelClass: 'toast-success'});
    });
  }

  testTodo() {
    this.todoService.setDefaultLocalStorageTodos();
    this.todoArray = this.todoService.getTodos();
    this.toast.open('Poprawnie wczytano testową bazę zadań', '', {panelClass: 'toast-success'});

  }

}
