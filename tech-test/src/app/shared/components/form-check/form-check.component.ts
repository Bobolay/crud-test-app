import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit, OnDestroy {
  @Input() done: boolean | string;
  @Output() checkChange: EventEmitter<boolean>;
  checkControl: FormControl;
  private readonly destroy$: Subject<void>;

  constructor() {
    this.checkChange = new EventEmitter<boolean>();
    this.checkControl = new FormControl();
    this.destroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.checkControl.patchValue(this.done);
    this.initCheckControlListener();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected initCheckControlListener(): void {
    this.checkControl.valueChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(value => {
        this.checkChange.emit(value);
      });
  }

}
