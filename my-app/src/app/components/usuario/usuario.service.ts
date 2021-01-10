import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } 

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  read(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
  
}
