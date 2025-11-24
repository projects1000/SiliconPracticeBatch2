import { Component, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  message: string = "";

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private abc: DataserviceService) { }

  showMessage() {
    const msg = this.abc.getMessage();
    alert(msg);  // 🔥 show alert
  }


  sendToParent() {
    this.messageEvent.emit(this.message); // 🔥 Fire event with typed text
  }
}
