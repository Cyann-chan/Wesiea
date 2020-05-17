import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiresieaPage } from './airesiea.page';

const routes: Routes = [
  {
    path: '',
    component: AiresieaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiresieaPageRoutingModule {}
