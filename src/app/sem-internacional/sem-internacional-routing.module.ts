import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemInternacionalPage } from './sem-internacional.page';

const routes: Routes = [
  {
    path: '',
    component: SemInternacionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemInternacionalPageRoutingModule {}
