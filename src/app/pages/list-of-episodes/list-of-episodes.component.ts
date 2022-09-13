import { Component, OnInit, Input} from '@angular/core';
import { Episodes } from 'src/app/interface/Character';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-list-of-episodes',
  templateUrl: './list-of-episodes.component.html',
  styleUrls: ['./list-of-episodes.component.css']
})
export class ListOfEpisodesComponent implements OnInit {

  episode$:  Observable<Episodes> | undefined ;

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterServiceService,
  ) { }

  ngOnInit(): void {


  this.route.params.pipe( take(1)).subscribe((params) => {
    const id = params['id'];
    this.episode$ = this.characterSvc.getAllEpisodes(id)
  });

  }

}
