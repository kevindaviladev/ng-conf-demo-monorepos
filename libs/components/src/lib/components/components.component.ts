
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  template: `
  @if(label){
    <label [htmlFor]="label">{{ label }}</label>
  }
    <input [formControl]="control" [type]="type" [placeholder]="placeholder" [id]="label" />
    @if (control.invalid && control.touched) {
      <div class="error-message">
        {{ errorMessage }}
      </div>
    }
  `,
  standalone: true,
  imports: [ReactiveFormsModule],
  styles: [`
    .error-message {
      color: red;
      font-size: 0.9em;
    }
  `]
})
export class CustomInputComponent {
  @Input() control!: FormControl;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type = 'text';
  @Input() errorMessage = 'Invalid input';
}
