import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Task} from '../../../interfaces/task.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() formData;
  @Output() formSubmit: EventEmitter<Task>;
  form!: FormGroup;

  constructor() {
    this.formSubmit = new EventEmitter<Task>();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      label: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
    this.form.patchValue(this.formData);
  }

  submit(): void {
    this.formSubmit.emit({...this.formData, ...this.form.value});
  }

}
