import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'detalhes.component',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent implements OnInit {
    
    usuarios: Usuario[]
    displayedColumns = ['id', 'name', 'email', 'more'];
    
    constructor(private usuarioService: UsuarioService, public dialog: MatDialog) { }   
    
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

