import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdaPage } from './bda.page';

const routes: Routes = [
  {
    path: '',
    component: BdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdaPageRoutingModule {}
