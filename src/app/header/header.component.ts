import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../Services/todos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private todosService = inject(TodosService);
  text:string = '';

  changeText(event:Event){
    this.text = (<HTMLInputElement>event.target).value;
  }
  addTodo() {
    if (this.text) {
      this.todosService.addTodo(this.text);
      this.text = ''; // Reset text to clear input field.
    }
  }

}
