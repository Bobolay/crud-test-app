import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../interfaces/task.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData(filterValue: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiBase}${filterValue ? '?q=' : ''}${filterValue}`);
  }

  getDataById(id: number): Observable<Task> {
    return this.http.get<Task>(`${environment.apiBase}${id}`);
  }

  createData(task: Task): Observable<any> {
    return this.http.post(`${environment.apiBase}`, task);
  }

  patchData(task: Task): Observable<any> {
    return this.http.patch(`${environment.apiBase}${task.id}`, task);
  }

  deleteData(task: Task): Observable<any> {
    return this.http.delete(`${environment.apiBase}${task.id}`);
  }
}
