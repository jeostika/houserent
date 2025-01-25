import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HouseHomePageComponent } from '../../components/house-home-page/house-home-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HouseHomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
