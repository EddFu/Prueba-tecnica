import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-favorite-characters',
  templateUrl: './favorite-characters.component.html',
  styleUrls: ['./favorite-characters.component.css']
})
export class FavoriteCharactersComponent {

  favCharacters$ = this.localStorageSvc.favCharacters$;

  constructor(
    private localStorageSvc: LocalStorageService
  ) { }

}
