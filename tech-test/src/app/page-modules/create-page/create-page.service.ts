import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataApiService} from '../../shared/services/data-api.service';
import {Task} from '../../shared/interfaces/task.interface';

@Injectable()
export class CreatePageService {
  constructor(
    private dataApiService: DataApiService
  ) {
  }

  createData(task: Task): Observable<any> {
    return this.dataApiService.createData(task);
  }
}
