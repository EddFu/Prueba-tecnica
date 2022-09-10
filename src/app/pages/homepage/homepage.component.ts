import { Component } from '@angular/core';
import { Character } from 'src/app/interface/Character';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  apiUrl = 'https://rickandmortyapi.com/api'

  characters: Character[] | undefined;


  constructor(
    public http: HttpClient,
  ) {
    this.getData();
   }

   //obtener personajes
   async getData() {
    await this.http.get<any>(this.apiUrl + '/character')
      .subscribe((res) => {
        // console.table(res.results)
        // console.log(res.results)
        this.characters = res.results.map(({id, name, image, status, species}: Character) => {
          return {
            id: id,
            name: name,
            image: image,
            status: status,
            species: species,
          }
        });
      });
  }

}
