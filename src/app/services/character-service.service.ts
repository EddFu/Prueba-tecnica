import { Injectable } from '@angular/core';
import { Character, LastLocation} from 'src/app/interface/Character';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { TrackHttpError } from 'src/app/interface/trackHttpError';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  apiUrl = 'https://rickandmortyapi.com/api/'

  character!: Character;

  constructor(
    public http: HttpClient,
  ) { }


  getDetails(id: number) {
    return this.http.get<Character>(`${this.apiUrl}character/${id}`)
  }

  getLocation(url: string) {
    return this.http.get<LastLocation>(url)
  }

  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{
    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}

