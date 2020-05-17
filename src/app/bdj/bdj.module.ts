import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdjPageRoutingModule } from './bdj-routing.module';

import { BdjPage } from './bdj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdjPageRoutingModule
  ],
  declarations: [BdjPage]
})
export class BdjPageModule {}
