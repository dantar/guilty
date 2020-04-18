import { Injectable } from '@angular/core';
import { GuiltyGame } from '../models/guilty-game.model';
import { GamesCommonService } from './games-common.service';
import { GuiltyCard } from '../models/guilty-card.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  game: GuiltyGame;

  supects = ['dwarves', 'guild', 'ruler', 'elves'];

  deck: GuiltyCard[];

  constructor(private games: GamesCommonService) {
    this.initGame();
  }

  initGame() {
    this.deck = [];
    [1, 2, 3, 1, 2, 3].forEach(severity => {
      this.supects.forEach(s => {
        this.deck.push({suspect: s, severity: severity, revealed: false})
      });
    });
    this.games.shuffle(this.deck);
    this.game = {days: [], actions: 3};
    this.aNewDay();
    this.aNewDay();
  }
  
  aNewDay() {
    let day: GuiltyCard[] = [];
    this.game.days.push(day);
    let confirms = [true, true, false];
    this.games.shuffle(confirms);
    let cost = 1;
    confirms.forEach(c => {
      let card = this.deck.pop();
      card.confirmed = c;
      card.cost = cost ++;
      day.push(card);
    });
  }

}
