import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFilmComponent } from './ajout-film.component';

describe('AjoutFilmComponent', () => {
  let component: AjoutFilmComponent;
  let fixture: ComponentFixture<AjoutFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
