import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import {MatDialog} from '@angular/material/dialog';

// import { AfterViewInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id', 'name', 'email', 'more'];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService, public dialog: MatDialog) { }
  
  openDialog() {
    this.dialog.open(detalhes);
  }

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

@Component({
  selector: 'detalhes',
  templateUrl: './detalhes.component.html',
})
export class detalhes implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id', 'name', 'email', 'more'];

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

