import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task;
  @Output() statusChange: EventEmitter<Task>;
  @Output() update: EventEmitter<Task>;
  @Output() delete: EventEmitter<Task>;

  constructor() {
    this.statusChange = new EventEmitter<Task>();
    this.update = new EventEmitter<Task>();
    this.delete = new EventEmitter<Task>();
  }

  onCheckChange(value: boolean): void {
    this.task.done = value ? new Date().toJSON().slice(0, 10).split('-').reverse().join('-') : value;
    this.statusChange.emit(this.task);
  }

}
