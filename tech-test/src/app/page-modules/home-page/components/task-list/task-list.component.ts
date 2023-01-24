import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {distinctUntilChanged, finalize, shareReplay, startWith, switchMap, takeUntil} from 'rxjs/operators';
import {HomePageService} from '../../home-page.service';
import {Task} from '../../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [HomePageService]
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks$!: Observable<Task[]>;
  taskToDelete: BehaviorSubject<Task>;
  deleteChange$: BehaviorSubject<boolean>;
  filter!: FormControl;
  filterChange$: Observable<any>;
  private destroy$: Subject<void>;

  constructor(
    private router: Router,
    private homePageService: HomePageService,
    private modalService: NgbModal
  ) {
    this.taskToDelete = new BehaviorSubject<Task>(null);
    this.deleteChange$ = new BehaviorSubject<boolean>(null);
    this.filter = new FormControl('');
    this.destroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.filterChange$ = this.filter.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      );

    this.tasks$ = combineLatest([this.filterChange$, this.deleteChange$])
      .pipe(
        switchMap(([filterValue]) => {
          return this.homePageService.getData(filterValue);
        }),
        shareReplay(1)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
