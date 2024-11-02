import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeaBienStore } from '@codeabien/store';

@Component({
  selector: 'lib-videoplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videoplayer.component.html',
  styleUrl: './videoplayer.component.css',
})
export class VideoplayerComponent {
  store = inject(CodeaBienStore)

}
