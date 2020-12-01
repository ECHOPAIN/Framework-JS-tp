import { Injectable } from '@angular/core';
import { catCard } from './catCard'
@Injectable({
  providedIn: 'root'
})
export class CatService {

  public initialCards: catCard[] = [
    {
      id: 1,
      title: 'Random cat card',
      imageUrl: 'https://cataas.com/cat?width=250&height=200',
      description: 'That card shows a random cat image.'
    },
    {
      id: 2,
      title: 'Random cat card',
      imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
      description: 'That card shows a random cat image with a text !'
    }
  ];

  constructor() { }

  getCats(){
    return this.initialCards;
  }
}
