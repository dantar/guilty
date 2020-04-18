import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { SuspectComponent } from './components/suspect/suspect.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    SuspectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
