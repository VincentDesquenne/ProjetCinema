import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActeurComponent } from './modifier-acteur.component';

describe('ModifierActeurComponent', () => {
  let component: ModifierActeurComponent;
  let fixture: ComponentFixture<ModifierActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
