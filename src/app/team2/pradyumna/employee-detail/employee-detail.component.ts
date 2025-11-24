import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  @Input() employee: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
