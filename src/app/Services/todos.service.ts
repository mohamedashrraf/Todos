import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../Interfaces/todo.interface';
import { FilterEnum } from '../Interfaces/filter.enum';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoSig = signal<TodoInterface[]>([]);
  filterSig= signal<FilterEnum>(FilterEnum.all);
  constructor() { }

  addTodo(text:string) {
    const newTodo:TodoInterface={
      text,
      isCompleted:false,
      id:Math.random().toString(16)
    }
    this.todoSig.update((todos)=>[...todos, newTodo]);
  }

   changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

}
