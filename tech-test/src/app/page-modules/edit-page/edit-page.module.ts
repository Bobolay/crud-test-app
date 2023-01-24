import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {EditPageRoutingModule} from './edit-page-routing.module';
import {EditTaskComponent} from './components/edit-task/edit-task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    EditTaskComponent
  ],
  imports: [
    CoreModule,
    EditPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EditPageModule {
}
