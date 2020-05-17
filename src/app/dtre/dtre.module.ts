import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtrePageRoutingModule } from './dtre-routing.module';

import { DtrePage } from './dtre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtrePageRoutingModule
  ],
  declarations: [DtrePage]
})
export class DtrePageModule {}
