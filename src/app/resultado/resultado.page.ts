import { Component, OnInit } from '@angular/core';
import {Produto} from '../models/resultado-produtos.model';
import {ResultadoProdutosService} from '../resultado-produtos.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  public listaProdutos: Array<Produto> = [ ];

  constructor(private resultadoProduto: ResultadoProdutosService) { }

  ngOnInit() {
    this.resultadoProduto.getAllProdutos().subscribe((produtos) => {
      this.listaProdutos = produtos.map( (obj) => {
        return {
          id: obj.payload.doc.id,
          nome: obj.payload.doc.data()['nome'],
          preco: obj.payload.doc.data()['preco'],
          imgPath: obj.payload.doc.data()['imgPath'],
          url: obj.payload.doc.data()['url'],
          fav: obj.payload.doc.data()['fav'],
        };
      });
    });
  }
}
