import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorito-button',
  templateUrl: './favorito-button.component.html',
  styleUrls: ['./favorito-button.component.css']
})
export class FavoritoButtonComponent implements OnInit {

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    localStorage.getItem('selected');
  }

  public toggleSelected(value) {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
   
    localStorage.setItem('selected', value);
  }

}