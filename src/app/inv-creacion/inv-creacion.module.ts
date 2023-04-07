import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvCreacionPageRoutingModule } from './inv-creacion-routing.module';

import { InvCreacionPage } from './inv-creacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvCreacionPageRoutingModule
  ],
  declarations: [InvCreacionPage]
})
export class InvCreacionPageModule {}
