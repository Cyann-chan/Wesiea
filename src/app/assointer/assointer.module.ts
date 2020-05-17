import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssointerPageRoutingModule } from './assointer-routing.module';

import { AssointerPage } from './assointer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssointerPageRoutingModule
  ],
  declarations: [AssointerPage]
})
export class AssointerPageModule {}
