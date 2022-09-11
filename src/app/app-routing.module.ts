import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { FavoriteCharactersComponent } from './pages/favorite-characters/favorite-characters.component';
import { HomepageComponent } from './pages/homepage/homepage.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'Character-Details/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'Favorites',
    component: FavoriteCharactersComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
