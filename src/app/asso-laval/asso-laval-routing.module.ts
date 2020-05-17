import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssoLavalPage } from './asso-laval.page';

const routes: Routes = [
  {
    path: '',
    component: AssoLavalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssoLavalPageRoutingModule {}
