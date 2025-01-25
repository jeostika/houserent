import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  role: string | null = null;
  username: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to authentication status
    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });

    // Subscribe to role changes
    this.authService.getRole().subscribe((role) => {
      this.role = role;
    });

    // Subscribe to username changes
    this.authService.getUsername().subscribe((username) => {
      this.username = username;
    });
  }

  user(): void {
    this.router.navigate(['/user']);
  }

  home(): void {
    this.router.navigate(['/']);
  }

  logout(): void {
    this.authService.logout();
    alert('Logged out successfully!');
    this.router.navigate(['/']);
  }
}
