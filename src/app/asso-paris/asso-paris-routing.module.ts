import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssoParisPage } from './asso-paris.page';

const routes: Routes = [
  {
    path: '',
    component: AssoParisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssoParisPageRoutingModule {}
