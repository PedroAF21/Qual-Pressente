import { Component, OnInit } from '@angular/core';
import {AuthLoginService} from '../auth-login.service';
import {Usuario} from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: Usuario = {
    id: '',
    nome: '',
    codigoUID: '',
    email: '',
    senha: '',
    foto: '',
  };

  constructor(private authLogin: AuthLoginService) { }

  ngOnInit() {
  }

  ionOnViewEnter() {
    this.authLogin.logout().then((resposta) => {
      console.log('Logout resposta', resposta);

      this.authLogin.setUsuarioAutenticado(false);
    }).catch((erro) => {
      console.error('Logout erro: ', erro);
    });
  }

  public logar(formulario: any) {
    console.log(formulario);
    console.log(formulario.value);

    this.usuario.email = formulario.value.email;
    this.usuario.senha = formulario.value.senha;
    this.authLogin.realizarLogin(this.usuario);
  }

}
