import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from './services/todo.service';
import { EditTodoComponent } from './components/todo-input/edit-todo/edit-todo.component';
import {MatDialogModule, MatDialog , MatDialogRef} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';

const MAT_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 1500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents: [EditTodoComponent],
  providers: [TodoService, EditTodoComponent,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_GLOBAL_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
