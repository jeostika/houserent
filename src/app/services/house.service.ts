import { Injectable } from '@angular/core';

export interface House {
  id: number;
  name: string;
  image: string;
  pricePerNight: number;
  type: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houses: House[] = [
    { id: 0, name: 'Beach House', image: 'assets/images/beach.jpg', type: 'Villa', pricePerNight: 1500, location: 'Miami Beach' },
    { id: 1, name: 'Mountain Cabin', image: 'assets/images/mountain.jpg', type: 'Cabin', pricePerNight: 120, location: 'Rocky Mountains' },
    { id: 2, name: 'City Apartment', image: 'assets/images/city.jpg', type: 'Apartment', pricePerNight: 800, location: 'New York' },
    { id: 3, name: 'Luxury Mansion', image: 'assets/images/luxary.jpg', type: 'Mansion', pricePerNight: 5000, location: 'Beverly Hills' },
    { id: 4, name: 'Cozy Cottage', image: 'assets/images/cotage.jpg', type: 'Cottage', pricePerNight: 60, location: 'Countryside' },
    { id: 5, name: 'Modern Loft', image: 'assets/images/modern.jpg', type: 'Loft', pricePerNight: 150, location: 'San Francisco' },
  ];

  getHouses(): House[] {
    return this.houses;
  }

  getHouseById(id: number): House | null {
    return this.houses.find(house => house.id === id) || null;
  }
}
