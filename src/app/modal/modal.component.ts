import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalFields;
  @Input() buttonText;
  @Input() fieldValues = [];

  @Output() closeModal = new EventEmitter();
  @Output() sendFormData = new EventEmitter();

  public modalForm = this.fb.group({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.fieldValues) {
      this.modalForm = this.fb.group({
        0: this.fieldValues[0] || '',
        1: this.fieldValues[1] || '',
      });
    }
  }

  onCancel() {
    this.closeModal.emit(this.modalForm.value);
  }

  onFormSubmit() {
    this.sendFormData.emit(this.modalForm.value);
  }

}
