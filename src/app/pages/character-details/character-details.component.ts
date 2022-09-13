import { Component, OnInit, Input} from '@angular/core';
import { Character } from 'src/app/interface/Character';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterServiceService } from 'src/app/services/character-service.service';




@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character!: Character;

  character$:  Observable<Character> | undefined ;


  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterServiceService,
  ) {

}


  ngOnInit(): void {

  this.route.params.subscribe((params) => {
    const id = params['id'];
    this.character$ = this.characterSvc.getDetails(id)
  });
}

}

