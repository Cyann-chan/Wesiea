import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssoParisPageRoutingModule } from './asso-paris-routing.module';

import { AssoParisPage } from './asso-paris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssoParisPageRoutingModule
  ],
  declarations: [AssoParisPage]
})
export class AssoParisPageModule {}
