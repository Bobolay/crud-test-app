import {FormControl} from '@angular/forms';
import {distinctUntilChanged, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class MixinFilterByInput {
  filter: FormControl;

  constructor() {
    this.filter = new FormControl('');
  }

  protected initFilterByInput(): Observable<any> {
    return this.filter.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged()
      );
  }
}
