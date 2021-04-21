import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoDetalhesPageRoutingModule } from './resultado-detalhes-routing.module';

import { ResultadoDetalhesPage } from './resultado-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoDetalhesPageRoutingModule
  ],
  declarations: [ResultadoDetalhesPage]
})
export class ResultadoDetalhesPageModule {}
