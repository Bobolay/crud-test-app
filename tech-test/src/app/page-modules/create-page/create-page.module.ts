import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {CreatePageRoutingModule} from './create-page-routing.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CoreModule,
    CreatePageRoutingModule,
    SharedModule
  ]
})
export class CreatePageModule {
}
