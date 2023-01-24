import {Injectable} from '@angular/core';
import {DataApiService} from '../../shared/services/data-api.service';
import {Observable} from 'rxjs';
import {Task} from '../../shared/interfaces/task.interface';

@Injectable()
export class HomePageService {
  constructor(
    private dataApiService: DataApiService
  ) {
  }

  getData(filterValue: string): Observable<Task[]> {
    return this.dataApiService.getData(filterValue);
  }

  patchData(task: Task): Observable<any> {
    return this.dataApiService.patchData(task);
  }

  deleteData(task: Task): Observable<any> {
    return this.dataApiService.deleteData(task);
  }
}
