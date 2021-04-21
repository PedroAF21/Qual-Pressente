import { Component, OnInit } from '@angular/core';
import {Produto} from '../models/resultado-produtos.model';
import {ResultadoProdutosService} from '../resultado-produtos.service';

@Component({
  selector: 'app-produtos-salvos',
  templateUrl: './produtos-salvos.page.html',
  styleUrls: ['./produtos-salvos.page.scss'],
})
export class ProdutosSalvosPage implements OnInit {

  public listaProdutos: Array<Produto> = [ ];

  constructor(private resultadoProduto: ResultadoProdutosService) { }

  ngOnInit() {
    this.listaProdutos = this.resultadoProduto.getFavoriteProduto();
  }
}
