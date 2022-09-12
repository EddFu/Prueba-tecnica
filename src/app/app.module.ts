import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { FavoriteCharactersComponent } from './pages/favorite-characters/favorite-characters.component';
import { LocationComponent } from './pages/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CharacterDetailsComponent,
    CardComponent,
    FavoriteCharactersComponent,
    LocationComponent
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
