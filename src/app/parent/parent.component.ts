import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = 'Message from Parent Component';
  childResponse: string | null = null;

  handleChildEvent(response: string) {
    this.childResponse = response;
  }
}
