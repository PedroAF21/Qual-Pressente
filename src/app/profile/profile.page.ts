import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../models/profile.model';

import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActionSheetController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public clienteForm: FormGroup;

  public fotoNova: string = null;

  public imagemSelecionada = '';

  private id = '';

  private edicao = false;

  public codigo = '';

  public profileLogado: Profile;

  public profileEdit: Profile = {
    id: null,
    nome: '',
    sobrenome: '',
    email: '',
    password: '',
    nomeFotoEnviada: '',
    urlFotoCapturada: '',
    urlFotoExibir: '',
  };

  constructor(private plataforma: Platform,
              private filePath: FilePath,
              private camera: Camera,
              private webview: WebView,
              private file: File,
              private actionSheet: ActionSheetController,
              private rota: Router,
              private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private rotaAtiva: ActivatedRoute) {
                  this.clienteForm = this.formBuilder.group({
                  nome: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100)
                  ])
                  ],
                });
              }

  ngOnInit() {
    this.id = this.rotaAtiva.snapshot.paramMap.get('id');
    this.profileService.getById(this.id).then((profile) => {
      this.profile = profile;
      this.imagemSelecionada =  (cliente.urlFotoExibir) ? cliente.urlFotoExibir : 'assets/img/user.png';

      this.clienteForm.patchValue({
        nome: this.profile.nome,
        cidade: this.profile.cidade,
        idade: this.profile.idade,
        genero: this.profile.genero
      });

    });
  }

  deletar() {
    this.profileService.deletar(this.id, this.profile.nomeFotoEnviada).then(() => {
      this.rota.navigate(['/clientes']);
    });
  }

  salvar() {

    const profile: Profile = {
      id: this.profile.id,
      nome: this.clienteForm.value.nome,
      nomeFotoEnviada: this.profile.nomeFotoEnviada,
      urlFotoCapturada: this.imagemSelecionada,
      urlFotoExibir: this.profile.urlFotoExibir
    };


    this.profileService.update(profile, this.fotoNova).then((resposta) => {
      console.log('resposta', resposta);
      this.rota.navigate(['/clientes']);
    }).catch((erro) => {
      console.error('Salvar cliente erro', erro);
    });
  }

  public async capturarFoto() {
    const action = await this.actionSheet.create({
      header: 'Capturar foto do cliente',
      buttons: [
        {
          text: 'Galeria de imagens',
          handler: () => {
            this.obterFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Usar a câmera',
          handler: () => {
            this.obterFoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await action.present();
  }

  public obterFoto(source: PictureSourceType) {
    const options: CameraOptions = {
      quality: 10,
      targetHeight: 200,
      targetWidth: 200,
      sourceType: source,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((caminhoImagem: string) => {

      if (this.plataforma.is('android') && source === this.camera.PictureSourceType.PHOTOLIBRARY) {

        this.filePath.resolveNativePath(caminhoImagem).then((localizacao) => {
          const caminhoCorrigido = localizacao.substr(0, localizacao.lastIndexOf('/') + 1);
          const nomeUtilizado = caminhoImagem.substr(caminhoImagem.lastIndexOf('/') + 1, caminhoImagem.lastIndexOf('?'));

          let caminhoGaleria = caminhoCorrigido + nomeUtilizado;
          caminhoGaleria = this.caminhoImagem(caminhoGaleria);

          this.imagemSelecionada = caminhoGaleria;
          this.fotoNova = caminhoGaleria;

        });

      } else {
        const caminhoCorrigido = caminhoImagem.substr(0, caminhoImagem.lastIndexOf('/') + 1);
        const nomeUtilizado = caminhoImagem.substr(caminhoImagem.lastIndexOf('/') + 1);

        this.copiarArquivoDiretorioLocal(caminhoCorrigido, nomeUtilizado,
          this.criarNomeArquivo());
      }



    });
  }

  public copiarArquivoDiretorioLocal(caminho, nomeAtual, novoNomeArquivo) {
    this.file.copyFile(caminho, nomeAtual, this.file.dataDirectory, novoNomeArquivo)
      .then((sucesso) => {
        console.log(sucesso);
        const caminhoArquivo = this.file.dataDirectory + novoNomeArquivo;

        const caminhoConvertido = this.caminhoImagem(caminhoArquivo);
        this.imagemSelecionada = caminhoConvertido;
        this.fotoNova = caminhoConvertido;

      }).catch((falha) => {
      console.error(falha);
    });
  }

  public caminhoImagem(caminho) {
    if (!caminho) {
      return '';
    } else {
      const caminhoConvertido = this.webview.convertFileSrc(caminho);
      return caminhoConvertido;
    }
  }

  public criarNomeArquivo() {
    const dataAtual = new Date();
    const nome = dataAtual.getTime() + '.jpg';
    return nome;
  }
}
