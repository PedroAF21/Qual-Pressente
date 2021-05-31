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

  public produto: Produto =  {
    id: '',
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
    const id: string = this.rotaAtiva.snapshot.paramMap.get('id');
    this.produtoService.getProdutoById(id).then( (produto) => {
      this.produto = produto;
    });
  }

  public produtoFavorito(e) {
    (e.currentTarget.checked) ? this.produto.fav = true : this.produto.fav = false;
    this.produtoService.editarProdutoFavorito(this.produto).then(
      (respota) => {
        this.router.navigate(['/resultado']);
      }
    ).catch((erro) => {
      console.error('Editar erro: ', erro);
    });
  }

}
