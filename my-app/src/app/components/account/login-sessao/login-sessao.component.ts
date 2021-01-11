import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-sessao',
  templateUrl: './login-sessao.component.html',
  styleUrls: ['./login-sessao.component.css']
})
export class LoginSessaoComponent implements OnInit {
  
  email: string
  senha: string
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['isa@gmail.com', Validators.required],
      senha: ['123', Validators.required]
    });
  }

    async onSubmit() {
   
      }
    }

