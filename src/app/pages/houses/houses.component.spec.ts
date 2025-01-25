import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';
import { HouseService } from '../../services/house.service';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;
  let houseService: HouseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesComponent],
      providers: [HouseService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    houseService = TestBed.inject(HouseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load houses on initialization', () => {
    expect(component.houses.length).toBeGreaterThan(0);
  });

  it('should filter houses based on selected category', () => {
    const initialLength = component.filteredHouses.length;
    component.filterHouses('Villa');
    expect(component.filteredHouses.length).toBeLessThan(initialLength);
  });

  it('should navigate to rent-house page', () => {
    const houseId = 1;
    spyOn(component['router'], 'navigate');
    component.goToRentHouse(houseId);
    expect(component['router'].navigate).toHaveBeenCalledWith(['/rent-house', houseId]);
  });
});
