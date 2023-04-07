import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemInternacionalPageRoutingModule } from './sem-internacional-routing.module';

import { SemInternacionalPage } from './sem-internacional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemInternacionalPageRoutingModule
  ],
  declarations: [SemInternacionalPage]
})
export class SemInternacionalPageModule {}
