import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from '@codeabien/components'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'lib-playground',
  standalone: true,
  imports: [CommonModule, CustomInputComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  })

  
}
