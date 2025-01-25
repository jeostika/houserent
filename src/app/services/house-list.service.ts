import { Injectable } from '@angular/core';

export interface House {
  name: string;
  image: string;
  type: string;
  pricePerNight: number;
  features: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houses: House[] = [
    { name: 'Beach House', image: "assets/images/beach.jpg", type: 'Villa', pricePerNight: 1500, features: ['Ocean View', 'Pool', '5 Bedrooms'] },
    { name: 'Mountain Cabin', image: "assets/images/mountain.jpg", type: 'Cabin', pricePerNight: 120, features: ['Mountain View', 'Fireplace', '2 Bedrooms'] },
    { name: 'City Apartment', image: "assets/images/city.jpg", type: 'Apartment', pricePerNight: 800, features: ['City View', 'Wi-Fi', '1 Bedroom'] },
    { name: 'Luxury Mansion', image: "assets/images/luxary.jpg", type: 'Mansion', pricePerNight: 5000, features: ['Pool', 'Garden', '8 Bedrooms'] },
    { name: 'Cozy Cottage', image: "assets/images/cottage.jpg", type: 'Cottage', pricePerNight: 60, features: ['Countryside View', 'Fireplace', '2 Bedrooms'] },
    { name: 'Modern Loft', image: "assets/images/modern.jpg", type: 'Loft', pricePerNight: 150, features: ['City View', 'Modern Design', '1 Bedroom'] },
  ];

  private selectedHouse: House | null = null;

  constructor() {}

  getHouses(): House[] {
    return this.houses;
  }

  setSelectedHouse(house: House): void {
    this.selectedHouse = house;
  }

  getSelectedHouse(): House | null {
    return this.selectedHouse;
  }
}
