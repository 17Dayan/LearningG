import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasantiaNacionalPageRoutingModule } from './pasantia-nacional-routing.module';

import { PasantiaNacionalPage } from './pasantia-nacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasantiaNacionalPageRoutingModule
  ],
  declarations: [PasantiaNacionalPage]
})
export class PasantiaNacionalPageModule {}
