import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActeurComponent } from './view-acteur.component';

describe('ViewActeurComponent', () => {
  let component: ViewActeurComponent;
  let fixture: ComponentFixture<ViewActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
