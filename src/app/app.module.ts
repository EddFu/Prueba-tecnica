import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { FavoriteCharactersComponent } from './pages/favorite-characters/favorite-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CharacterDetailsComponent,
    CardComponent,
    FavoriteCharactersComponent,
    // CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
