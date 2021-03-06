import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { HomeComponent } from './home/home.component';
import { CatService } from './cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    CatCardComponent,
    routingComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
