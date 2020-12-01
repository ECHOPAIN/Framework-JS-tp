import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  @Input() public id = 0;
  @Input() public title = "";
  @Input() public imageUrl = '';
  @Input() public description = '';

  constructor() { }

  ngOnInit(): void {

  }


}
