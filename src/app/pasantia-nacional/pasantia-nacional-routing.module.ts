import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasantiaNacionalPage } from './pasantia-nacional.page';

const routes: Routes = [
  {
    path: '',
    component: PasantiaNacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasantiaNacionalPageRoutingModule {}
