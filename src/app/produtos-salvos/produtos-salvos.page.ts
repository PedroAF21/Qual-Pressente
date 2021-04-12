import { Component, OnInit } from '@angular/core';
import {Produto} from '../models/resultado-produtos.model';

@Component({
  selector: 'app-produtos-salvos',
  templateUrl: './produtos-salvos.page.html',
  styleUrls: ['./produtos-salvos.page.scss'],
})
export class ProdutosSalvosPage implements OnInit {

  public listaProdutos: Array<Produto> = [
    {
      id: 1,
      nome: 'Lego',
      preco: 100,
      imgPath: '../assets/images/babyyoda.jpeg',
      url: 'https://www.legombrinq.com.br/lego-star-wars-a-crianca/p'
    },
    {
      id: 2,
      nome: 'Boneca',
      preco: 90,
      imgPath: '../assets/images/barbie.jpeg',
      url: 'https://www.amazon.com.br/Barbie-Sisters-Carrinho-Cachorrinhos-Mattel/dp/B083VKRMH9/ref=asc_df_B083VKRMH9/?tag=googleshopp00-20&linkCode=df0&hvadid=398590003560&hvpos=&hvnetw=g&hvrand=3078354782428322617&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-917079754799&psc=1'
    },
    {
      id: 3,
      nome: 'Livros',
      preco: 200,
      imgPath: '../assets/images/hp.png',
      url: 'https://www.amazon.com.br/Caixa-Harry-Potter-Edi%C3%A7%C3%A3o-Premium/dp/8532505708/ref=sr_1_1?dchild=1&keywords=harry+potter&qid=1618069991&sr=8-1'
    },
  ];

  constructor() { }

  public getAllProdutos(): Array <Produto> {
    return this.listaProdutos;
  }

  ngOnInit() {
  }
}
