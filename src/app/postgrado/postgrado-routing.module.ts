import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostgradoPage } from './postgrado.page';

const routes: Routes = [
  {
    path: '',
    component: PostgradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostgradoPageRoutingModule {}
