import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardsService } from 'src/app/guards/auth-guards.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardsService]
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuardsService]
  },
  {
    path: 'produtos-salvos',
    loadChildren: () => import('./produtos-salvos/produtos-salvos.module').then( m => m.ProdutosSalvosPageModule),
    canActivate: [AuthGuardsService]
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./sobrenos/sobrenos.module').then( m => m.SobrenosPageModule),
    canActivate: [AuthGuardsService]
  },
  {
    path: 'resultado',
    loadChildren: () => import('./resultado/resultado.module').then( m => m.ResultadoPageModule),
    canActivate: [AuthGuardsService]
  },
  {
    path: 'produto-detalhes/:id',
    loadChildren: () => import('./resultado-detalhes/resultado-detalhes.module').then( m => m.ResultadoDetalhesPageModule),
    canActivate: [AuthGuardsService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
