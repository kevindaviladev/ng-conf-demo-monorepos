import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PlaygroundComponent } from '@codeabien/bootcamps';
import { TodosComponent } from '@codeabien/todos';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PlaygroundComponent, TodosComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'codeabien';
}
