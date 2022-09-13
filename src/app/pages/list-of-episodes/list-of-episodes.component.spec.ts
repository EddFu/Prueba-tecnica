import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEpisodesComponent } from './list-of-episodes.component';

describe('ListOfEpisodesComponent', () => {
  let component: ListOfEpisodesComponent;
  let fixture: ComponentFixture<ListOfEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
