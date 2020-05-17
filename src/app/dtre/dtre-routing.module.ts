import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtrePage } from './dtre.page';

const routes: Routes = [
  {
    path: '',
    component: DtrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtrePageRoutingModule {}
