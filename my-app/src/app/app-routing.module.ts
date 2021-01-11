import { CadastroComponent } from './components/account/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {FavoritosComponent} from './views/favoritos/favoritos.component';
import {LoginComponent} from './views/login/login.component';
import {LoginSessaoComponent} from './components/account/login-sessao/login-sessao.component';
import { AuthGuard } from './components/account/shared/auth.guard';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {path: "favoritos",  component: FavoritosComponent},
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '', component: LoginComponent,
    children: [
      {path:'', redirectTo: 'login-sessao', pathMatch: 'full'},
      {path:'login-sessao', component: LoginSessaoComponent},
      {path:'cadastro', component: CadastroComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
