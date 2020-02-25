import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Todo} from '../../../interfaces/todo';
import {TodoService} from '../../../services/todo.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  editText: string;
  index: number;
  id: number;
  constructor(private dialogRef: MatDialogRef<EditTodoComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private todoService: TodoService,
  ) {
    this.editText = data.todo.text;
    this.id = data.todo.id;
    this.index = data.index;
    console.log(data);
  }

  ngOnInit(): void {

  }

  updateTodos() {
    this.todoService.updateTodos(this.index, this.id, this.editText);
    this.dialogRef.close();
  }

}
