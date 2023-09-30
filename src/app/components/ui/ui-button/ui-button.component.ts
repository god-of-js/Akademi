import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
})
export class UiButtonComponent {
  @Input() variant?: 'primary' | 'secondary'
  @Input() round?: 'full' | 'half'
}
