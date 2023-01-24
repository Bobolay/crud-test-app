import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';
import {HomePageRoutingModule} from './home-page-routing.module';
import {TaskListComponent} from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CoreModule,
    HomePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule {
}
