import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHomePageComponent } from './house-home-page.component';

describe('CarsHomePageComponent', () => {
  let component: HouseHomePageComponent;
  let fixture: ComponentFixture<HouseHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
