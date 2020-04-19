import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { SuspectComponent } from './components/suspect/suspect.component';
import { GameIconComponent } from './components/game-icon/game-icon.component';
import { AccusationIconComponent } from './components/accusation-icon/accusation-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    SuspectComponent,
    GameIconComponent,
    AccusationIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
