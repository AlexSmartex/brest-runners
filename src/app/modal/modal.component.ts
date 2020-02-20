import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalFields;
  @Input() onSubmit;

  @Output() modalOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.modalFields);
  }

  emitEvent() {
    this.modalOutput.emit(this.modalOutput);
  }

}
