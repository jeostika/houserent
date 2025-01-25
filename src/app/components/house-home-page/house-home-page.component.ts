import { Component, OnInit } from '@angular/core';
import { HouseService, House } from '../../services/house.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-home-page.component.html',
  styleUrls: ['./house-home-page.component.css']
})
export class HouseHomePageComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService, private router: Router) {}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
  }

  goToRentHouse(houseId: number): void {
    this.router.navigate(['/rent-house', houseId]);
  }
}
