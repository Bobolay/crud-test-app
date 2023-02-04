import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {finalize, shareReplay, switchMap, takeUntil} from 'rxjs/operators';
import {HomePageService} from '../../home-page.service';
import {Task} from '../../../../shared/interfaces/task.interface';
import {Mixin} from 'ts-mixer';
import {MixinDestroy} from '../../../../shared/mixins/mixin-destroy';
import {MixinFilterByInput} from '../../../../shared/mixins/mixin-filter-by-input';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [HomePageService]
})
export class TaskListComponent extends Mixin(MixinDestroy, MixinFilterByInput) implements OnInit {
  tasks$!: Observable<Task[]>;
  taskToDelete: BehaviorSubject<Task>;
  deleteChange$: BehaviorSubject<boolean>;
  filterChange$: Observable<any>;

  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private modalService: NgbModal
  ) {
    super();
    this.taskToDelete = new BehaviorSubject<Task>(null);
    this.deleteChange$ = new BehaviorSubject<boolean>(null);
    this.filterChange$ = this.initFilterByInput().pipe(takeUntil(this.destroy$));
  }

  ngOnInit(): void {

    this.tasks$ = combineLatest([this.filterChange$, this.deleteChange$])
      .pipe(
        switchMap(([filterValue]) => {
          return this.homePageService.getData(filterValue);
        }),
        shareReplay(1)
      );
  }

  updateTask(task: Task) {
    this.homePageService.patchData(task).subscribe();
  }

  redirectToEditTaskPage(task: Task): void {
    this.router.navigateByUrl(`edit-page/${task.id}`);
  }

  setTaskToDelete(task: Task): void {
    this.taskToDelete.next(task);
  }

  deleteTask(): void {
    this.homePageService.deleteData(this.taskToDelete.getValue())
      .pipe(
        finalize(() => {
          this.taskToDelete.next(null);
          this.modalService.dismissAll();
          this.deleteChange$.next(true);
        })
      )
      .subscribe();
  }

  openDeleteTaskModal(content) {
    this.modalService.open(content);
  }

}
