import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoDetalhesPage } from './resultado-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoDetalhesPageRoutingModule {}
