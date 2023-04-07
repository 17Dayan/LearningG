import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemActualizacionPageRoutingModule } from './sem-actualizacion-routing.module';

import { SemActualizacionPage } from './sem-actualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemActualizacionPageRoutingModule
  ],
  declarations: [SemActualizacionPage]
})
export class SemActualizacionPageModule {}
