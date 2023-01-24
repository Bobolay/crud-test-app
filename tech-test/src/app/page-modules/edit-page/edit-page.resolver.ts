import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Task} from '../../shared/interfaces/task.interface';
import {DataApiService} from '../../shared/services/data-api.service';

@Injectable({
  providedIn: 'root'
})
export class EditPageResolver implements Resolve<Task> {
  constructor(
    private dataApiService: DataApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
    return this.dataApiService.getDataById(route.params.id);
  }
}
