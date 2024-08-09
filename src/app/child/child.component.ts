import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() response = new EventEmitter<string>();

  sendResponse() {
    this.response.emit('Response from Child Component');
  }
}
