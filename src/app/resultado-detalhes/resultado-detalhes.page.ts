import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultadoProdutosService} from '../resultado-produtos.service';
import {Produto} from '../models/resultado-produtos.model';

@Component({
  selector: 'app-resultado-detalhes',
  templateUrl: './resultado-detalhes.page.html',
  styleUrls: ['./resultado-detalhes.page.scss'],
})
export class ResultadoDetalhesPage implements OnInit {
  public codigo = '';

  public produto: Produto =  {
    id: null,
    nome: '',
    preco: null,
    imgPath: '',
    url: '',
    fav: null,
  };

  constructor(private router: Router,
              private rotaAtiva: ActivatedRoute,
              private produtoService: ResultadoProdutosService) {
  }

  ngOnInit() {
    let id = 1;
    this.codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    id = Number(this.codigo);
    this.produto = this.produtoService.getProdutoById(id);
  }

  public produtoFavorito(e) {
    (e.currentTarget.checked) ? this.produto.fav = true : this.produto.fav = false;
    this.produtoService.editarProdutoFavorito(this.produto);
    this.router.navigate(['/resultado']);
  }

}
