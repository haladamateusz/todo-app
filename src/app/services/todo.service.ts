import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number;

  constructor() {
    const todos = this.getTodos();
    console.log(todos);
    if (todos.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = todos[todos.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  addTodo(text: string) {
    const tmpTodo = {id: this.nextId, text};
    const todos = this.getTodos();
    todos.push(tmpTodo);

    this.setLocalStorageTodos(todos);
    this.nextId++;
  }


  getTodos() {
    const localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  getTodo(index) {
    const todos = this.getTodos();
    return todos[index];
  }

  removeTodo(index) {
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.setLocalStorageTodos(todos);
  }

  updateTodos(index, id, text) {
    const todos = this.getTodos();
    todos[index] = {id, text};
    this.setLocalStorageTodos(todos);
  }


  setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({todos}));
  }

  setDefaultLocalStorageTodos() {
    const todos = [{id: 0, text: 'kupić szokobonsy 🍬'},
      {id: 1, text: 'zjeść maczka 🍟'},
      {id: 2, text: 'pooglądać żyrandole 💡'},
      {id: 3, text: 'kebs na kolację 🥙'}];
    this.setLocalStorageTodos(todos);
  }

}
