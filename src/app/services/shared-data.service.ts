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
    this.game = {days: [], actions: 5, suspects: []};
    this.supects.forEach(s => {
      [1, 2, 3, 1, 2, 3].forEach(severity => {
        this.deck.push({suspect: s, severity: severity, revealed: false})
      });
      this.game.suspects.push({suspect: s, guilty: 0, accused: true});
    });
    this.games.shuffle(this.deck);
    this.aNewDay();
    this.aNewDay();
    this.updateSuspects();
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

  endGame(suspect: string) {
    while (this.game.days.length < 4) {
      this.aNewDay();
    }
    this.game.days.forEach(d => {
      d.forEach(c => {
        c.revealed = true;
      })
    })
    this.updateSuspects();
  }

  oneMoreGame() {
    this.initGame();
  }

  updateSuspects() {
    this.game.suspects.forEach(s => {
      s.guilty = 0;
      this.game.days.forEach(d => {
        d.filter(c => c.revealed && c.confirmed && (c.suspect === s.suspect))
        .forEach(c => {
          s.guilty += c.severity;
        });
      })
    })
  }

}
