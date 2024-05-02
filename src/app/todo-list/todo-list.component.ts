import { CommonModule } from '@angular/common';
import { FilterEnum } from '../Interfaces/filter.enum';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodosService } from './../Services/todos.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    TodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todosService = inject(TodosService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todoSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });
}
