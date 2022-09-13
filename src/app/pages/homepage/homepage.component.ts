import { Component } from '@angular/core';
import { Character, Characters, Info } from 'src/app/interface/Character';
import { HttpClient} from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{

  apiUrl = 'https://rickandmortyapi.com/api/character'

  characters!: Characters;
  info!: Info;
  charactersSubject: any;

  constructor(
    public http: HttpClient,
    private localStorageSvc : LocalStorageService,

  ) {
    this.getCharacters();
   }

   //obtener todos personajes
   async getCharacters() {
    await this.http.get<any>(this.apiUrl)
      .subscribe((res) => {
        this.characters = {
          info: {
            count: res.info.count,
            pages: res.info.pages,
            next: res.info.next,
            prev: res.info.prev
          },
          characters: res.results.map(({id, name, image, status, species,location, episode, url}: Character) => {
            return {
              id: id,
              name: name,
              image: image,
              status: status,
              species: species,
              location: location,
              episode: episode[episode.length - 1],
              url: url,
            }
          })
        }
        for(let i = 1; i < this.characters.info.pages; i++){
          this.http.get<any>(this.apiUrl + "?page=" + (i + 1)).subscribe((res) => {
            let localCharacters = res.results.map(({id, name, image, status, species,location, episode, url}: Character) => {
              return {
                id: id,
                name: name,
                image: image,
                status: status,
                species: species,
                location: location,
                episode: episode[episode.length - 1],
                url: url,
              }
            })
            this.characters.characters.push(...localCharacters)
          }).closed
        }
      }).closed;
  }

  //para el localstorage
  private parseCharactersData(characters: Character[]):void {
    const currentFavs = this.localStorageSvc.getFavCharacters();
    const newData = characters.map(character => {
      const found = !!currentFavs.find((fav : Character) => fav.id === character.id);
      return {... character, isFavorite: found};
    });
    this.charactersSubject.next(newData)
  }

}
