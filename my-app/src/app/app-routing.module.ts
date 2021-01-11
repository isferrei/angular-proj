import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {FavoritosComponent} from './views/favoritos/favoritos.component';
import {LoginSessaoComponent} from './components/account/login-sessao/login-sessao.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "favoritos",  component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
