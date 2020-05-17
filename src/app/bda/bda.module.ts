import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdaPageRoutingModule } from './bda-routing.module';

import { BdaPage } from './bda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdaPageRoutingModule
  ],
  declarations: [BdaPage]
})
export class BdaPageModule {}
