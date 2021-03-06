import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-game-icon, [app-game-icon]',
  templateUrl: './game-icon.component.html',
  styleUrls: ['./game-icon.component.scss']
})
export class GameIconComponent implements OnInit {

  @Output() acted = new EventEmitter();

  constructor(public shared: SharedDataService) { }

  ngOnInit(): void {
  }

}
