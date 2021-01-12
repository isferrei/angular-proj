import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../shared/auth.service';
import { Usuario } from './usuario'

@Component({
  selector: 'app-login-sessao',
  templateUrl: './login-sessao.component.html',
  styleUrls: ['./login-sessao.component.css']
})
export class LoginSessaoComponent implements OnInit {
  
   usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  fazerLogin(){
   this.authService.fazerLogin(this.usuario);
  }

}
