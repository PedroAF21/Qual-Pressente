import { Component, OnInit } from '@angular/core';
import {Produto} from "../models/resultado-produtos.model";
import {ResultadoProdutosService} from "../resultado-produtos.service";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  public listaProdutos: Array<Produto> = [ ];

  constructor(private resultadoProduto: ResultadoProdutosService) { }

  ngOnInit() {
    this.listaProdutos = this.resultadoProduto.getAllProdutos();
  }

}
