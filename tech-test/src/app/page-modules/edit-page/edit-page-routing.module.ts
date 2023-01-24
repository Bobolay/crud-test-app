import {RouterModule, Routes} from '@angular/router';
import {EditTaskComponent} from './components/edit-task/edit-task.component';
import {NgModule} from '@angular/core';
import {EditPageResolver} from './edit-page.resolver';


const routes: Routes = [
  {
    path: ':id',
    component: EditTaskComponent,
    resolve: {
      data: EditPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPageRoutingModule {
}

