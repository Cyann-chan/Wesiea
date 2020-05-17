import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdsPageRoutingModule } from './bds-routing.module';

import { BdsPage } from './bds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdsPageRoutingModule
  ],
  declarations: [BdsPage]
})
export class BdsPageModule {}
