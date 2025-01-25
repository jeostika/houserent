import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House, HouseService } from '../../services/house.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houses: House[] = [];
  filteredHouses: House[] = [];
  categories: string[] = ['Villa', 'Cabin', 'Apartment', 'Mansion', 'Cottage', 'Loft'];
  selectedCategory: string = '';

  constructor(private houseService: HouseService, private router: Router) {}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
    this.filteredHouses = [...this.houses]; 
  }

  filterHouses(category: string): void {
    this.selectedCategory = category; 
    this.filteredHouses = category ? this.houses.filter(house => house.type === category) : [...this.houses];
  }

  goToRentHouse(houseId: number): void {
    this.router.navigate(['/rent-house', houseId]);
  }
}
