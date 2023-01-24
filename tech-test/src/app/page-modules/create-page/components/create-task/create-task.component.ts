import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {CreatePageService} from '../../create-page.service';
import {Task} from '../../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
  providers: [CreatePageService]
})
export class CreateTaskComponent {

  constructor(
    private createPageService: CreatePageService,
    private router: Router
  ) {
  }

  submit(task: Task) {
    this.createPageService.createData(task)
      .pipe(
        finalize(() => this.router.navigateByUrl('home-page'))
      )
      .subscribe();
  }

}
