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
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.fieldValues) {
      this.modalForm = this.fb.group({
        0: this.fieldValues[0] || '',
        1: this.fieldValues[1] || '',
        2: this.fieldValues[2] || '',
        3: this.fieldValues[3] || '',
        4: this.fieldValues[4] || '',
        5: this.fieldValues[5] || '',
        6: this.fieldValues[6] || '',
        7: this.fieldValues[7] || '',
        8: this.fieldValues[8] || '',
        9: this.fieldValues[9] || '',
        10: this.fieldValues[10] || '',
        11: this.fieldValues[11] || '',
        12: this.fieldValues[12] || '',
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
