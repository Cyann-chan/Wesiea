import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KpsPageRoutingModule } from './kps-routing.module';

import { KpsPage } from './kps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KpsPageRoutingModule
  ],
  declarations: [KpsPage]
})
export class KpsPageModule {}
