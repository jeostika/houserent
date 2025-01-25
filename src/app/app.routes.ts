import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent} from './pages/houses/houses.component';
import { RentHouseComponent } from './pages/rent-house/rent-house.component';
import { UserComponent } from './pages/user/user.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'houses', component: HousesComponent},
  { path: 'rent-house/:id', component: RentHouseComponent },
  { path: 'user', component: UserComponent },
];
