import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.scss']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[]
  displayedRows$: Observable<Usuario[]>;
  displayedColumns = ['id', 'name', 'email', 'more', 'favorite'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios;
      console.log(usuarios)
    }, err => {
      console.log("Erro ao listar usuarios!", err);
    }
    )

  }
}