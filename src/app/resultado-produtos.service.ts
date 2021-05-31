import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import {Produto} from './models/resultado-produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoProdutosService {

  constructor(private firestore: AngularFirestore) { }

  public getAllProdutos() {
    return this.firestore.collection('produtos').snapshotChanges();
  }

  public getFavoriteProduto(): Array <Produto> {
    const favProduto = [];
    const produtos = this.firestore.collection('produtos', obj => obj.where('fav', '==', true)).ref.get().then((querySnapshot) => {
        querySnapshot.docs.map((obj) => {
          const produto = {
            id: obj.id,
            nome: obj.data()['nome'],
            preco: obj.data()['preco'],
            imgPath: obj.data()['imgPath'],
            url: obj.data()['url'],
            fav: obj.data()['fav'],
          };
          if (produto.fav === true) {
            favProduto.push(produto);
          }
        });
      }
    );

    return favProduto;
  }

  public getProdutoById(id: string) {
    return this.firestore.collection('produtos').doc(id).ref.get().then((produto) => {
      if (produto.exists) {
        return {
          id: produto.id,
          nome: produto.data()['nome'],
          preco: produto.data()['preco'],
          imgPath: produto.data()['imgPath'],
          url: produto.data()['url'],
          fav: produto.data()['fav'],
        };
      } else {
        return {
          id: '',
          nome: '',
          preco: null,
          imgPath: '',
          url: '',
          fav: false,
        };
      }
    });
  }

  public editarProdutoFavorito(item: Produto) {
    return this.firestore.doc(`produto-detalhes/${item.id}`).update(item);
  }
}
