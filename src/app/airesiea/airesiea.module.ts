import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiresieaPageRoutingModule } from './airesiea-routing.module';

import { AiresieaPage } from './airesiea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiresieaPageRoutingModule
  ],
  declarations: [AiresieaPage]
})
export class AiresieaPageModule {}
