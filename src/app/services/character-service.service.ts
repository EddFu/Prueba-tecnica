import { Injectable } from '@angular/core';
import { Character, LastLocation, Episodes } from 'src/app/interface/Character';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { TrackHttpError } from 'src/app/interface/trackHttpError';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  apiUrl = 'https://rickandmortyapi.com/api/'

  constructor(
    public http: HttpClient,
  ) { }


  getDetails(id: number) {
    return this.http.get<Character>(`${this.apiUrl}character/${id}`)
  }

  getLocation(url: string) {
    return this.http.get<LastLocation>(url)
  }

  getAllEpisodes(url: string) {
    console.log(url)
    return this.http.get<Episodes>(url)

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

  searchCharacters(query = '', page = 200):Observable<Character[] | TrackHttpError> {
    const filter = `${this.apiUrl}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }
}

