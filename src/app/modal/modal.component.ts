import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalFields;
  @Input() onSubmit;

  @Output() closeModal = new EventEmitter();
  @Output() sendFormData = new EventEmitter();

  public modalForm = this.fb.group({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCancel() {
    this.closeModal.emit();
  }

  onFormSubmit() {
    this.sendFormData.emit(this.modalForm.value);
  }

}
