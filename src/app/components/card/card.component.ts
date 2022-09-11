import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interface/Character';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { switchMap} from "rxjs/operators";
import { CharacterServiceService } from 'src/app/services/character-service.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() character!: Character;

  characterId: string | null = null;
  // charac: Character | null = null;


  constructor(
    private localStorageSvc: LocalStorageService,
    private route: ActivatedRoute,
    private characterService: CharacterServiceService,
  ) {
  }

  toggleFavorite():void {
      const isFavorite = this.character.isFavorite;
      this.character.isFavorite =!isFavorite;
      this.localStorageSvc.addOrRemFav(this.character)
  }

}
