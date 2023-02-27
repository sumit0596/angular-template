import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalilableUnitsComponent } from './avalilable-units.component';

describe('AvalilableUnitsComponent', () => {
  let component: AvalilableUnitsComponent;
  let fixture: ComponentFixture<AvalilableUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvalilableUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvalilableUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
