import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosSalvosPageRoutingModule } from './produtos-salvos-routing.module';

import { ProdutosSalvosPage } from './produtos-salvos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosSalvosPageRoutingModule
  ],
  declarations: [ProdutosSalvosPage]
})
export class ProdutosSalvosPageModule {}
