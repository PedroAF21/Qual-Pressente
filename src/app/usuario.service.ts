import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Usuario} from './models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) { }

  public getAll() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  public get(id: string) {
    return this.firestore.collection('usuarios').doc(id).ref.get().then((usuario) => {
      if (usuario.exists) {
        return {
          id: usuario.id,
          nome: usuario.data()['nome'],
          email: usuario.data()['email'],
          senha: usuario.data()['senha'],
          foto: usuario.data()['foto']
        };
      } else {
        return {
          id: '',
          nome: '',
          email: '',
          senha: '',
          foto: ''
        };
      }
    });
  }

  public getByUID(uid: string) {
    return this.firestore.collection('usuarios', ref => ref.where('codigoUID', '==', uid)).snapshotChanges();
  }

  public add(usuario: Usuario) {
    delete usuario.id;
    return this.firestore.collection('usuarios').add(usuario);
  }
}
