import { Injectable } from '@angular/core';
import {Produto} from './models/resultado-produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoProdutosService {

  public produtos: Array<Produto> = [
    {
      id: 1,
      nome: 'Lego',
      preco: 100,
      imgPath: '../assets/images/babyyoda.jpeg',
      url: 'https://www.legombrinq.com.br/lego-star-wars-a-crianca/p',
      fav: false
    },
    {
      id: 2,
      nome: 'Boneca',
      preco: 90,
      imgPath: '../assets/images/barbie.jpeg',
      url: 'https://www.amazon.com.br/Barbie-Sisters-Carrinho-Cachorrinhos-Mattel/dp/B083VKRMH9/ref=asc_df_B083VKRMH9/?tag=googleshopp00-20&linkCode=df0&hvadid=398590003560&hvpos=&hvnetw=g&hvrand=3078354782428322617&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-917079754799&psc=1',
      fav: false
    },
    {
      id: 3,
      nome: 'Livros',
      preco: 200,
      imgPath: '../assets/images/hp.png',
      url: 'https://www.amazon.com.br/Caixa-Harry-Potter-Edi%C3%A7%C3%A3o-Premium/dp/8532505708/ref=sr_1_1?dchild=1&keywords=harry+potter&qid=1618069991&sr=8-1',
      fav: true
    },
    {
      id: 4,
      nome: 'Playstation 5',
      preco: 7000,
      imgPath: '../assets/images/ps5.jpg',
      url: 'https://www.kabum.com.br/produto/115737/console-sony-playstation-5-cfi-1014a',
      fav: true
    },
    {
      id: 5,
      nome: 'Batedeira',
      preco: 300,
      imgPath: '../assets/images/batedeira.jpg',
      url: 'https://www.magazineluiza.com.br/batedeira-planetaria-mondial-preto-e-inox-700w-premium-12-velocidades/p/021259400/ep/bapl/?&seller_id=magazineluiza&&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=58375&gclid=Cj0KCQjwmcWDBhCOARIsALgJ2QdIjgthk1SQWB3Ase1G7l504RVjJI7sL48fofSyyE25Uz_vZEg4VsQaAmjJEALw_wcB',
      fav: false
    },
    {
      id: 6,
      nome: 'Jogo de videogame',
      preco: 200,
      imgPath: '../assets/images/Horizon_Zero_Dawn_capa.png',
      url: 'https://store.playstation.com/pt-br/product/UP9000-CUSA10237_00-HRZCE00000000000',
      fav: true
    }
  ];

  constructor() { }

  public getAllProdutos(): Array <Produto> {
    return this.produtos;
  }

  public getFavoriteProduto(): Array <Produto> {
    const favProduto = [];

    for (const obj of this.produtos) {
      if (obj.fav === true) {
        favProduto.push(obj);
      }
    }

    return favProduto;
  }

  public getProdutoById(id: number): Produto {
    for (const obj of this.produtos) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

  public editarProdutoFavorito(item: Produto) {
    for (const obj of this.produtos) {
      if (item.id === obj.id) {
        obj.fav = item.fav;
        break;
      }
    }
  }
}
