import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login-sessao/usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>()
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'usuario@email.com' && 
      usuario.senha === '123'){

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true)

        this.router.navigate(['home']);

      }else{

        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false)

      }

  }
}
