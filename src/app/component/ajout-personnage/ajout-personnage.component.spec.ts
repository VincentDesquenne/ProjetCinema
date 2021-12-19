import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPersonnageComponent } from './ajout-personnage.component';

describe('AjoutPersonnageComponent', () => {
  let component: AjoutPersonnageComponent;
  let fixture: ComponentFixture<AjoutPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
