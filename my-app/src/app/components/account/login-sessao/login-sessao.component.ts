import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-login-sessao',
  templateUrl: './login-sessao.component.html',
  styleUrls: ['./login-sessao.component.css']
})
export class LoginSessaoComponent implements OnInit {
  login = {
    email: '',
    senha:''
  };

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
  }

    async onSubmit() {
      try{
        const result = await this.accountService.login(this.login);
        console.log('Login efetuado: ${result}');

        this.router.navigate(['/login']);
      }catch(error){
        console.error(error);
      }
      }
    }

