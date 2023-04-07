import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostgradoPageRoutingModule } from './postgrado-routing.module';

import { PostgradoPage } from './postgrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostgradoPageRoutingModule
  ],
  declarations: [PostgradoPage]
})
export class PostgradoPageModule {}
