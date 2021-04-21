import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../models/profile.model';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private edicao = false;

  public codigo = '';

  public profileLogado: Profile;

  public profileEdit: Profile = {
    id: null,
    nome: '',
    sobrenome: '',
    email: '',
    password: ''
  };

  constructor(private profileService: ProfileService,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    let id = 1;

    // this.codigo = this.rotaAtiva.snapshot.paramMap.get('id');
    //
    // id = Number(this.codigo);

    this.profileLogado = this.profileService.getProfileById(id);
  }

  public habilitarEdicao() {

    this.profileEdit.id = this.profileLogado.id;
    this.profileEdit.nome = this.profileLogado.nome;
    this.profileEdit.sobrenome = this.profileLogado.sobrenome;
    this.profileEdit.email = this.profileLogado.email;
    this.profileEdit.password = this.profileLogado.password;

    this.edicao = true;
  }

  public cancelarEdicao() {
    this.edicao = false;
  }

  public salvar() {
    // this.profileService.editarServico(this.profileEdit);
  }
}
