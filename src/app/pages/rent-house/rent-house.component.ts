import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House, HouseService } from '../../services/house.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent-house',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rent-house.component.html',
  styleUrls: ['./rent-house.component.css']
})
export class RentHouseComponent implements OnInit {
  house: House | null = null;
  isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.house = this.houseService.getHouseById(id);

    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  onRentHouse(): void {
    if (!this.isAuthenticated) {
      alert('You must sign in to rent a house!');
      return;
    }
    alert('House rented successfully!');
  }
}
