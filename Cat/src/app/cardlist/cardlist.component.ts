import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { catCard } from '../catCard'

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {

  public initialCards: catCard[] = [];

  constructor(private _catService: CatService) { }

  ngOnInit(): void {
    this.initialCards = this._catService.getCats();
  }

}
