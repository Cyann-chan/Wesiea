import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssointerPage } from './assointer.page';

const routes: Routes = [
  {
    path: '',
    component: AssointerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssointerPageRoutingModule {}
