import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemActualizacionPage } from './sem-actualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: SemActualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemActualizacionPageRoutingModule {}
