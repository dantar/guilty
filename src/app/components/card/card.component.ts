import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GuiltyCard } from 'src/app/models/guilty-card.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-card, [app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: GuiltyCard;
  @Output() acted = new EventEmitter<GuiltyCard>();

  constructor(private shared: SharedDataService) { }

  ngOnInit(): void {
  }

  revealCard() {
    this.card.revealed = true;
    this.acted.emit(this.card);
  }

}
