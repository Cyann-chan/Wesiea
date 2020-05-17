import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BDEPageRoutingModule } from './bde-routing.module';

import { BDEPage } from './bde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BDEPageRoutingModule
  ],
  declarations: [BDEPage]
})
export class BDEPageModule {}
