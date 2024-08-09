import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css',
})
export class SignalExampleComponent {
  // Define a signal with an initial value
  count = signal(0);

  increment() {
    // Update the signal value
    this.count.update((value) => value + 1);
  }

  decrement() {
    // Update the signal value
    this.count.update((value) => value - 1);
  }
}
