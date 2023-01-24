import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditPageService} from '../../edit-page.service';
import {Task} from '../../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EditPageService]
})
export class EditTaskComponent {
  formData: Task;

  constructor(
    private route: ActivatedRoute,
    private editPageService: EditPageService
  ) {
    this.route.data.subscribe(resolverData => this.formData = resolverData.data);
  }

  submit(task: Task): void {
    this.editPageService.patchData(task).subscribe();
  }

}
