import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRealisateurComponent } from './ajout-realisateur.component';

describe('AjoutRealisateurComponent', () => {
  let component: AjoutRealisateurComponent;
  let fixture: ComponentFixture<AjoutRealisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRealisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRealisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
