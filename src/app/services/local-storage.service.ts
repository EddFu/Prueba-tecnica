import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Character } from '../interface/Character';


const FAV_CHARACTERS = 'favCharacters';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private favCharactersSubject = new BehaviorSubject<Character[] | null>(null);
  favCharacters$ = this.favCharactersSubject.asObservable();


  constructor() {
    this.initialStorage();
  }

  addOrRemFav(character: Character): void {
    //destructuracion del id
    const {id} = character;
    //recuperar los guardados
    const currentFav = this.getFavCharacters();
    const found = !!currentFav.find( (fav:Character) => fav.id === id);
    found ? this.removeFromFavorite(id): this.addToFavorite(character);
  }

  private addToFavorite(character:Character):void {
    try {
      const currentFav = this.getFavCharacters();
      localStorage.setItem(FAV_CHARACTERS, JSON.stringify([... currentFav, character]));
      this.favCharactersSubject.next([ ... currentFav, character]);
    }catch (error) {
      console.log('Error saving character', error);
      alert('Error');
    }
  }

  private removeFromFavorite(id:number):void {
    try {
      const currentFav = this.getFavCharacters();
      const characters = currentFav.filter((item: { id: number }) => item.id !== id);
      localStorage.setItem(FAV_CHARACTERS, JSON.stringify([... characters]));
      this.favCharactersSubject.next([... characters]);
    }catch (error) {
      console.log('Error removing character', error);
      alert('Error');
    }
  }

  getFavCharacters():any {
    try{
      const favCharacters = JSON.parse(localStorage.getItem(FAV_CHARACTERS)!);
      this.favCharactersSubject.next(favCharacters);
      return favCharacters;
    } catch (error) {
      console.log('Error', error)
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.log('Error cleaning local storage', error)
    }
  }

  private initialStorage(): void {
    const current = JSON.parse(localStorage.getItem(FAV_CHARACTERS)!);
    if(!current ) {
      localStorage.setItem(FAV_CHARACTERS, JSON.stringify([]));
    }
    this.getFavCharacters();
  }
}
