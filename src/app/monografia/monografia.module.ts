import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonografiaPageRoutingModule } from './monografia-routing.module';

import { MonografiaPage } from './monografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonografiaPageRoutingModule
  ],
  declarations: [MonografiaPage]
})
export class MonografiaPageModule {}
