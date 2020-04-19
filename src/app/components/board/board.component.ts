import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { GuiltyCard, SuspectCard } from 'src/app/models/guilty-card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  showSuspects: boolean;

  constructor(public shared: SharedDataService) { }

  ngOnInit(): void {
    this.showSuspects = false;
  }

  actionOnDayCard(day: GuiltyCard[], card: GuiltyCard) {
    if (card.cost > this.shared.game.actions) return;
    card.revealed = true;
    this.shared.game.actions -= card.cost;
    if (day.filter(c => c.revealed && !c.confirmed).length > 0 || day.filter(c => !c.revealed).length <= 1) {
      day.forEach(c => c.revealed = true); 
    };
    if (this.shared.game.days.length < 4) {
      this.shared.aNewDay();
    }
    this.shared.updateSuspects();
  }

  accusation(suspect: SuspectCard) {
    suspect.accused = true;
    this.shared.endGame(suspect.suspect);
  }

  translateGroup(index: number): string {
    return `translate(${index % 2 * 55} -${Math.floor(index/2) * 55} )`
  }

  toggleShowSuspects() {
    this.showSuspects = ! this.showSuspects;
  }
}
