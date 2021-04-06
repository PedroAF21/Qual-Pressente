import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosSalvosPage } from './produtos-salvos.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosSalvosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosSalvosPageRoutingModule {}
