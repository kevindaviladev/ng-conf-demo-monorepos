import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PlaygroundComponent } from '@codeabien/bootcamps';
import { TodosComponent } from '@codeabien/todos';
import { VideoplayerComponent } from '@codeabien/videoplayer';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PlaygroundComponent, TodosComponent, VideoplayerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'codeabien';
}
