import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  favoritos=[];

  addToFavoritos(usuario){
    this.favoritos.push(usuario)
  }

  getFavoritos() {
    return this.favoritos;
  }

  removeFromFavoritos(favorito){
    const index: number = this.favoritos.indexOf(favorito);
        this.favoritos.splice(index, 1);       
  }
  constructor() { }
}
