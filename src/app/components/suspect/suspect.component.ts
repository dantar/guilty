import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuspectCard } from 'src/app/models/guilty-card.model';

@Component({
  selector: 'app-suspect, [app-suspect]',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {

  @Input() suspect: SuspectCard;
  @Input() transform: string;
  @Output() pointed = new EventEmitter<SuspectCard>();

  constructor() { }

  ngOnInit(): void {
  }

}
