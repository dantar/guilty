import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SuspectCard } from 'src/app/models/guilty-card.model';

@Component({
  selector: 'app-accusation-icon, [app-accusation-icon]',
  templateUrl: './accusation-icon.component.html',
  styleUrls: ['./accusation-icon.component.scss']
})
export class AccusationIconComponent implements OnInit {

  constructor(public shared: SharedDataService) { }

  parts: SvgPart[];

  ngOnInit(): void {
    this.parts = [];
    this.parts.push({
      suspect: this.shared.game.suspects[0],
      transform: 'translate(0, 0)',
    });
    this.parts.push({
      suspect: this.shared.game.suspects[1],
      transform: 'translate(55, 0)',
    });
    this.parts.push({
      suspect: this.shared.game.suspects[2],
      transform: 'translate(0, -55)',
    });
    this.parts.push({
      suspect: this.shared.game.suspects[3],
      transform: 'translate(55, -55)',
    });
  }

}

class SvgPart {
  suspect: SuspectCard;
  transform: string;
}
