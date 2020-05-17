import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpsPage } from './kps.page';

const routes: Routes = [
  {
    path: '',
    component: KpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpsPageRoutingModule {}
