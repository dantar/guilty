import { Component, OnInit, Input } from '@angular/core';
import { GuiltyCard } from 'src/app/models/guilty-card.model';

@Component({
  selector: 'app-card, [app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: GuiltyCard;

  constructor() { }

  ngOnInit(): void {
  }

}
