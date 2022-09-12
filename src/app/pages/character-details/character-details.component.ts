import { Component, OnInit} from '@angular/core';
import { Character, LastLocation } from 'src/app/interface/Character';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CharacterServiceService } from 'src/app/services/character-service.service';




@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  // @Input() character!: Character;

  character$:  Observable<Character> | undefined ;


  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterServiceService,
  ) {

  }


  ngOnInit(): void {
  //   let characterId = this.activatedRoute.snapshot.paramMap.get('id')
  //   console.log(characterId)
  // }
  this.route.params.pipe( take(1)).subscribe((params) => {
    const id = params['id'];
    this.character$ = this.characterSvc.getDetails(id)
  });
}

goBack():void {
  window.history.back()
}

}

