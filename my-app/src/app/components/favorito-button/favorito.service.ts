import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {


  favoritos=[];
  selected: boolean;
  selectedEmitter = new EventEmitter<boolean>();
  selectedChange = new EventEmitter<boolean>();
  
  addToFavoritos(usuario){
    this.favoritos.push(usuario)
    this.selectedEmitter.emit(true)
  }

  getFavoritos() {
    return this.favoritos;
  }

  removeFromFavoritos(favorito){
    this.selectedEmitter.emit(false)
    const index: number = this.favoritos.indexOf(favorito);
        this.favoritos.splice(index, 1);       
  }

  constructor() { }

  public toggleSelected(usuario) {
    if(this.selected){
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    this.selectedEmitter.emit(true)
    }else{
      this.selectedEmitter.emit(false)
    }
  }
 
}
