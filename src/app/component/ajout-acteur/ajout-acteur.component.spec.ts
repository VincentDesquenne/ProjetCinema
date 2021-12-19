import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutActeurComponent } from './ajout-acteur.component';

describe('AjoutActeurComponent', () => {
  let component: AjoutActeurComponent;
  let fixture: ComponentFixture<AjoutActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutActeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
