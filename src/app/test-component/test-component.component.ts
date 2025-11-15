import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {


  @Input() chilcCompFathername : string ="";

  @Output() sendMessage = new EventEmitter<string>();

  childMessage: string = "";  // stores input text

    fireEvent() {
    this.sendMessage.emit(this.childMessage);
  }
  
}
