import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticBackgroundComponent } from './galactic-background.component';

describe('GalacticBackgroundComponent', () => {
  let component: GalacticBackgroundComponent;
  let fixture: ComponentFixture<GalacticBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalacticBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalacticBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
