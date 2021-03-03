import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesFunctionsComponent } from './pipes-functions.component';

const routes: Routes = [
  {
    path: '',
    component: PipesFunctionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesFunctionsRoutingModule {}
