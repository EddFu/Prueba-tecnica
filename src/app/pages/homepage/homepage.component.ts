import { Component } from '@angular/core';
import { Character, Episodes } from 'src/app/interface/Character';
import { HttpClient} from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{

  apiUrl = 'https://rickandmortyapi.com/api'

  characters: Character[] | undefined;
  episodes: Episodes[] | undefined;
  listOfEpisodes: [] = [];
  charactersSubject: any;

  constructor(
    public http: HttpClient,
    private localStorageSvc : LocalStorageService,
  ) {
    this.getCharacters();
   }

   //obtener personajes
   async getCharacters() {
    await this.http.get<any>(this.apiUrl + '/character')
      .subscribe((res) => {
        // console.table(res.results)
        // console.log(res.results)
        this.characters = res.results.map(({id, name, image, status, species,location, episode, url}: Character) => {
          return {
            id: id,
            name: name,
            image: image,
            status: status,
            species: species,
            location: location.name,
            episode: episode[episode.length - 1],
            url: url,
          }
        });
      });
  }


  private parseCharactersData(characters: Character[]):void {
    const currentFavs = this.localStorageSvc.getFavCharacters();
    const newData = characters.map(character => {
      const found = !!currentFavs.find((fav : Character) => fav.id === character.id);
      return {... character, isFavorite: found};
    });
    this.charactersSubject.next(newData)
  }

}
