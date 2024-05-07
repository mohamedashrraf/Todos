import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../Interfaces/todo.interface';
import { FilterEnum } from '../Interfaces/filter.enum';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoSig = signal<TodoInterface[]>([]);
  filterSig= signal<FilterEnum>(FilterEnum.all);
   changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void {
    this.todoSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string): void {
    this.todoSig.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string): void {
    this.todoSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todoSig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }
}
