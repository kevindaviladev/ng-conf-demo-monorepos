import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '@codeabien/data-access';

@Component({
  selector: 'lib-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todosService = inject(TodosService);
}
