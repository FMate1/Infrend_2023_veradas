import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonationFormListComponent } from './bloodDonationForm-list/bloodDonationForm-list.component';
import { BloodDonationFormComponent } from './bloodDonationForm-form/bloodDonationForm-form.component';
import { LocationListComponent } from './location-list/location-list.component';
import { BloodDonorFormComponent } from './bloodDonor-form/bloodDonor-form.component';
import { LocationFormComponent } from './location-form/location-form.component';

const routes: Routes = [
  {
    path: '',
    component: BloodDonationFormListComponent
  },
  {
    path: 'product-form',
    component: BloodDonationFormComponent
  },
  {
    path: 'product-form/:id',
    component: BloodDonationFormComponent
  },
  {
    path: 'location-list',
    component: LocationListComponent
  },
  {
    path: 'bloodDonor-form',
    component: BloodDonorFormComponent
  },
  {
    path: 'location-form',
    component: LocationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
