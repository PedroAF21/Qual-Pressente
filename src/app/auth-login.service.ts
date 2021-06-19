import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Usuario} from './models/usuario.model';
import {UsuarioService} from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private usuarioAutenticado = false;

  public usuario: Usuario = {
    id: '',
    nome: '',
    codigoUID: '',
    email: '',
    senha: '',
    foto: '',
  };


  constructor(private rota: Router,
              private fireAuth: AngularFireAuth,
              private usuarioService: UsuarioService) { }

  public realizarLogin(usuario: Usuario) {

    console.log('usuario', usuario);

    this.fireAuth.signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then((credenciais) => {

        this.usuarioService.getByUID(credenciais.user.uid).subscribe((usuario) => {
          console.log('usuario', usuario);

          const [user] = usuario;

          this.usuario = {
            id: user.payload.doc.id,
            nome: user.payload.doc.data()['nome'],
            codigoUID: user.payload.doc.data()['codigoUID'],
            email: user.payload.doc.data()['email'],
            senha: user.payload.doc.data()['senha'],
            foto: user.payload.doc.data()['foto'],
          };
        });

        this.usuarioAutenticado = true;

        this.rota.navigate(['/home']);

      }).catch((erro) => {
      this.usuarioAutenticado = false;

      console.error('Logar erro: ', erro);
    });

  }

  public logout() {
    return this.fireAuth.signOut();
  }

  public registrar(usuario: Usuario) {
    return this.fireAuth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  public isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }

  public setUsuarioAutenticado(valor: boolean) {
    this.usuarioAutenticado = valor;
  }
}
