import { Component, computed, inject } from '@angular/core';
import { TodoInterface } from '../Interfaces/todo.interface';
import { TodosService } from '../Services/todos.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../Interfaces/filter.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  shouldAnimate:boolean = true;
  activeCount = computed(() => {
    return this.todosService.todoSig().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodosClass = computed(() => this.todosService.todoSig().length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  )

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
    console.log('after changeFilter', this.todosService.filterSig());
  }


}
