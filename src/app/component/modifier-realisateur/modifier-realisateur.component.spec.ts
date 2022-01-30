import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRealisateurComponent } from './modifier-realisateur.component';

describe('ModifierRealisateurComponent', () => {
  let component: ModifierRealisateurComponent;
  let fixture: ComponentFixture<ModifierRealisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRealisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRealisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
