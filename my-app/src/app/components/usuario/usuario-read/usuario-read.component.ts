import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import {FavoritoService} from '../../favorito-button/favorito.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.scss']
})
export class UsuarioReadComponent implements OnInit {

   addToFavoritos(usuario){
    this.favoritoService.addToFavoritos(usuario);
    this.usuarioService.showMessage("Usuário favoritado")
    localStorage.setItem('selected', usuario);
  }

  usuarios: Usuario[]
  displayedRows$: Observable<Usuario[]>;
  displayedColumns = ['id', 'name', 'email', 'more', 'favorite'];

  constructor(private usuarioService: UsuarioService, private favoritoService: FavoritoService) { }

  ngOnInit(): void {
    localStorage.getItem('selected')

    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(usuarios)
    }, err => {
      console.log("Erro ao listar usuarios!", err);
    }
    )
  }
}