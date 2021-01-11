import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../components/favorito-button/favorito.service'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  favoritos;

  removeFromFavoritos(favorito){
    this.favoritoService.removeFromFavoritos(favorito);
    window.alert("Deseja mesmo remover favorito?");
  }

  constructor(private favoritoService: FavoritoService) { }

  ngOnInit(): void {
    this.favoritos = this.favoritoService.getFavoritos();
  }

  

}
