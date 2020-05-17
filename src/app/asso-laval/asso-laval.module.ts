import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssoLavalPageRoutingModule } from './asso-laval-routing.module';

import { AssoLavalPage } from './asso-laval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssoLavalPageRoutingModule
  ],
  declarations: [AssoLavalPage]
})
export class AssoLavalPageModule {}
