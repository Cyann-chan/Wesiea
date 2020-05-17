import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdsPage } from './bds.page';

const routes: Routes = [
  {
    path: '',
    component: BdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdsPageRoutingModule {}
