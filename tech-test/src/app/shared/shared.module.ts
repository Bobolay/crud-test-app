import {NgModule} from '@angular/core';
import {TaskComponent} from './components/task/task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { TaskFormComponent } from './components/task-form/task-form/task-form.component';
import {RouterModule} from '@angular/router';
import {FormCheckComponent} from './components/form-check/form-check.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskFormComponent,
    FormCheckComponent
  ],
    exports: [
        TaskComponent,
        TaskFormComponent
    ],
  imports: [
    CoreModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
}
