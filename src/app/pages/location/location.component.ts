import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import { Character, LastLocation } from 'src/app/interface/Character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location$:  Observable<LastLocation> | undefined ;

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterServiceService,
  ) { }

  ngOnInit(): void {

    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['url'];
      this.location$ = this.characterSvc.getLocation(id)
      console.log(id)
    });

  }

}
