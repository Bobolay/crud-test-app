import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CreateTaskComponent} from './components/create-task/create-task.component';

const routes = [
  {
    path: '',
    component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePageRoutingModule {
}

