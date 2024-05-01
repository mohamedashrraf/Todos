import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // private todosService = inject(TodosService);

  title = '';

  addTodo() {
    if (this.title) {
      // this.todosService.addItem(this.title);

      // Reset title to clear input field.
      this.title = '';
    }
  }
}
