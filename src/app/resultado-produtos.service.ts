import { Injectable } from '@angular/core';
import {Produto} from "./models/resultado-produtos.model";

@Injectable({
  providedIn: 'root'
})
export class ResultadoProdutosService {

  public produtos: Array<Produto> = [
    {
      id: 1,
      nome: "Lego",
      preco: 100,
      imgPath: "./../../assets/imagem/car.png"
    },
    {
      id: 2,
      nome: "Boneca",
      preco: 90,
      imgPath: "./../../assets/imagem/car.png"
    },
    {
      id: 3,
      nome: "troca de pneus",
      preco: 200,
      imgPath: "./../../assets/imagem/car.png"
    },
    {
      id: 4,
      nome: "Playstation 5",
      preco: 7000,
      imgPath: "./../../assets/imagem/car.png"
    },
    {
      id: 5,
      nome: "Batedeira",
      preco: 300,
      imgPath: "./../../assets/imagem/car.png"
    },
    {
      id: 6,
      nome: "Jogo de videogame",
      preco: 200,
      imgPath: "./../../assets/imagem/car.png"
    }
  ];

  constructor() { }

  public getAllProdutos():Array<Produto> {
    return this.produtos;
  }

  public getProdutoById(id: number): Produto {
    for(let obj of this.produtos) {
      if (obj.id === id) {
        return obj;
      }
    }
  }
}
